"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import useLogin from "@/hooks/auth/useLogin";

const formFields: {
  name: "password" | "email";
  label: string;
  type: string;
  className?: string;
}[] = [
  {
    name: "email",
    label: "Email",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
];

const formSchema = z.object({
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

function LoginForm() {
  const { mutate, isPending, isError } = useLogin();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
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
  }, [isError, form]);

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
        className="space-y-4 sm:w-[28rem]"
      >
        {formFields.map(({ name, label, type }) => (
          <FormField
            control={form.control}
            key={name}
            name={name}
            render={({ field }) => (
              <FormItem>
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

        <Button
          type="submit"
          variant="secondary"
          className="w-full"
          disabled={isPending}
        >
          Log in
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
