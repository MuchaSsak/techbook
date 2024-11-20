"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import PasswordFeedback from "@/components/pages-ui/(auth)/register/PasswordFeedback";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import useUpdatePassword from "@/hooks/auth/useUpdatePassword";

const formFields: {
  name: "password" | "confirmPassword";
  label: string;
  type: string;
  className?: string;
}[] = [
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm password",
    type: "password",
  },
];

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(64, "Password must be at most 64 characters.")
      .regex(/(.*\d.*)/, "Password must have at least one number (0-9).")
      .regex(/(.*\W.*)/, "Password must have at least one special character."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

function UpdatePasswordForm() {
  const { mutate, isPending, isError } = useUpdatePassword();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (isError) form.reset();
  }, [isError, form]);

  function onSubmitCapture() {
    for (const error of Object.entries(form.formState.errors)) {
      if (error[1]) toast.error(error[1].message);
    }
  }

  function onSubmit(formData: z.infer<typeof formSchema>) {
    mutate(formData.password);
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
              <FormItem
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
          className="w-full !mt-8"
          disabled={isPending}
        >
          Update password
        </Button>
      </form>
    </Form>
  );
}

export default UpdatePasswordForm;
