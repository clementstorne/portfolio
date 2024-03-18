import { Controller, useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";
import useToast from "../hooks/useToast";

export default function ContactForm() {
  const { control, handleSubmit, reset } = useForm();
  const toast = useToast();

  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    toast?.open("Votre message a été envoyé");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center w-full max-w-600 flex-nowrap"
    >
      <div className="w-full max-w-600">
        <label htmlFor="name" className="form-label">
          Nom
        </label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{
            required: "Ce champ est requis",
            pattern: {
              value: /^[A-Za-zÀ-ÖØ-öø-ÿ-' ]+$/i,
              message: "Nom invalide",
            },
          }}
          render={({ field, fieldState }) => (
            <>
              <input
                id="name"
                className={`form-input ${fieldState?.error ? "error" : ""}`}
                {...field}
                placeholder="Votre nom"
                autoComplete="name"
              />
              {fieldState?.error && (
                <p className="error-message">{fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </div>

      <div className="w-full max-w-600">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Ce champ est requis",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Adresse email invalide",
            },
          }}
          render={({ field, fieldState }) => (
            <>
              <input
                id="email"
                className={`form-input ${fieldState?.error ? "error" : ""}`}
                {...field}
                type="email"
                placeholder="Votre email"
                autoComplete="email"
              />
              {fieldState?.error && (
                <p className="error-message">{fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </div>

      <div className="w-full max-w-600">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{ required: "Ce champ est requis" }}
          render={({ field, fieldState }) => (
            <>
              <textarea
                id="message"
                className={`form-input h-200 md:h-280 ${
                  fieldState?.error ? "error" : ""
                }`}
                {...field}
                placeholder="Votre message"
              ></textarea>
              {fieldState?.error && (
                <p className="error-message">{fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </div>

      <button type="submit" className="button">
        Envoyer
      </button>
    </form>
  );
}
