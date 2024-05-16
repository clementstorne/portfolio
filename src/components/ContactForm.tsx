"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "Ce champ est requis",
    })
    .refine(
      (value) => /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(value),
      "Le nom doit commencer par une lettre majuscule, suivie de lettres minuscules, d'espaces, de tirets, d'apostrophes ou de points. Les caractères spéciaux ne sont pas autorisés."
    ),
  email: z
    .string()
    .min(1, {
      message: "Ce champ est requis",
    })
    .email({
      message: "Cet email n'est pas valide",
    }),
  message: z.string().min(1, {
    message: "Ce champ est requis",
  }),
});

const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { name, email, message } = values;
    const templateParams = {
      name,
      email,
      message,
    };

    const res = await emailjs.send(
      "service_xpgr5wo",
      "template_nbcgh7n",
      templateParams,
      "6y8hHNo4YQzoWoYNe"
    );

    if (res.status === 200) {
      toast({
        variant: "success",
        title: "Votre message a bien été envoyé",
        description: "Je tâcherai d'y répondre dans les plus bref délais",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Votre message n'a pas été envoyé",
        description: "Veuillez réessayer",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 fade-in-left delay-500"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input autoComplete="name" placeholder="Votre nom" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="Votre email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Votre message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full !mt-14 flex flex-col space-y-4">
          <Button size="lg" type="submit" className="font-bold">
            Envoyer le message
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
