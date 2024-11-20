"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import useRegister from "@/hooks/auth/useRegister";

import PasswordFeedback from "./PasswordFeedback";

const formFields: {
  name: "firstName" | "lastName" | "password" | "email";
  label: string;
  type: string;
  className?: string;
}[] = [
  {
    name: "firstName",
    label: "First name",
    type: "text",
  },
  {
    name: "lastName",
    label: "Last name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "text",
    className: "col-span-2",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    className: "col-span-2",
  },
];

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters.")
    .max(50, "First name must be at most 50 characters.")
    .regex(/^[\p{Letter}\s\-.']+$/u, "Please provide a valid name."),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters.")
    .max(50, "Last name must be at most 50 characters.")
    .regex(/^[\p{Letter}\s\-.']+$/u, "Please provide a valid name."),
  email: z
    .string()
    .email("Please provide a valid email address.")
    .max(320, "Email must be at most 320 characters."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(64, "Password must be at most 64 characters.")
    .regex(/(.*\d.*)/, "Password must have at least one number (0-9).")
    .regex(/(.*\W.*)/, "Password must have at least one special character."),
});

function RegisterForm({
  setEmail,
}: {
  readonly setEmail: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { mutate, isPending, isError, isSuccess } = useRegister();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (isError) {
      form.resetField("password");
      form.setFocus("email");
    }
    if (isSuccess) setEmail(form.getValues("email"));
  }, [isError, form, isSuccess, setEmail]);

  function onSubmitCapture() {
    for (const error of Object.entries(form.formState.errors)) {
      if (error[1]) toast.error(error[1].message);
    }
  }

  function onSubmit(formData: z.infer<typeof formSchema>) {
    mutate(formData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onSubmitCapture={onSubmitCapture}
        className="grid grid-cols-2 gap-4 sm:w-[28rem]"
      >
        {formFields.map(({ name, label, type, className }) => (
          <FormField
            control={form.control}
            key={name}
            name={name}
            render={({ field }) => (
              <FormItem
                className={className}
                onChange={
                  type === "password" ? () => form.trigger() : undefined
                }
              >
                <FormControl>
                  <FloatingLabelInput
                    {...field}
                    type={type}
                    id={name}
                    label={label}
                    disabled={isPending}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        ))}
        <PasswordFeedback
          password={isPending ? "" : form.getValues().password}
        />

        <Button
          type="submit"
          variant="secondary"
          className="w-full col-span-2 mt-4"
          disabled={isPending}
        >
          Continue
        </Button>
      </form>
    </Form>
  );
}

export default RegisterForm;
