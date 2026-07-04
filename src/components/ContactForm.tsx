// Contact Form component using React Hook Form and Zod
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z
    .string()
    .min(1, "Please enter your email")
    .email("Email address must be a valid address"),
  message: z
    .string()
    .min(1, "Please enter a message")
    .min(10, "Please enter a longer message (min 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Message sent successfully!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <main className="container mx-auto px-4">
      <h1 className="heading">Connect with Me!</h1>
      <Card className="mx-auto mb-10 max-w-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Write me a message!</CardTitle>
          <CardDescription>
            Have a project in mind? Something I can help with? <br /> Totally
            open to hearing from you!
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <CardContent className="space-y-4">
            <Field data-invalid={!!errors.name}>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input
                id="name"
                placeholder="Please enter your name"
                autoComplete="off"
                {...register("name")}
              />
              {errors.name && <FieldError>{errors.name.message}</FieldError>}
            </Field>

            <Field data-invalid={!!errors.email}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="Please enter your email"
                autoComplete="off"
                {...register("email")}
              />
              {errors.email && <FieldError>{errors.email.message}</FieldError>}
            </Field>

            <Field data-invalid={!!errors.message}>
              <FieldLabel htmlFor="message">Your message</FieldLabel>
              <Textarea
                id="message"
                placeholder="Type your message here..."
                rows={5}
                {...register("message")}
              />
              {errors.message && <FieldError>{errors.message.message}</FieldError>}
            </Field>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full text-base font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isSubmitting ? "Submitting" : "Send Message"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
