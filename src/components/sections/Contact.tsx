"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { contactSchema } from "@/lib/validation";
import type { ContactForm } from "@/types/contact";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const preferredContact = watch("preferredContact");

  const onSubmit = async (data: ContactForm) => {
    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error);

      if (data.preferredContact === "whatsapp" && result.whatsappLink) {
        window.open(result.whatsappLink, "_blank");
      }

      toast.success(
        data.preferredContact === "email"
          ? "Pesan telah terkirim melalui email!"
          : "Membuka WhatsApp..."
      );

      reset();
    } catch (error) {
      toast.error("Gagal mengirim pesan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nama
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                {...register("email")}
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="preferredContact"
                className="block text-sm font-medium mb-2"
              >
                Metode Kontak
              </label>
              <select
                {...register("preferredContact")}
                id="preferredContact"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
              >
                <option value="email">Email</option>
                <option value="whatsapp">WhatsApp</option>
              </select>
            </div>

            {preferredContact === "whatsapp" && (
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Nomor WhatsApp
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  placeholder="contoh: 081234567890"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            )}

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Pesan
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
