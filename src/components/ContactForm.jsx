import { useForm, Controller } from "react-hook-form";

export default function ContactForm() {
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-600 flex flex-col flex-nowrap justify-center items-center"
    >
      <div className="w-full max-w-600">
        <label className="form-label">Nom</label>
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
                className={`form-input ${fieldState?.error ? "error" : ""}`}
                {...field}
                placeholder="Votre nom"
              />
              {fieldState?.error && (
                <p className="error-message">{fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </div>

      <div className="w-full max-w-600">
        <label className="form-label">Email</label>
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
                className={`form-input ${fieldState?.error ? "error" : ""}`}
                {...field}
                type="email"
                placeholder="Votre email"
              />
              {fieldState?.error && (
                <p className="error-message">{fieldState.error.message}</p>
              )}
            </>
          )}
        />
      </div>

      <div className="w-full max-w-600">
        <label className="form-label">Message</label>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{ required: "Ce champ est requis" }}
          render={({ field, fieldState }) => (
            <>
              <textarea
                className={`form-input h-280 ${
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
