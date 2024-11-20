"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useOrder from "@/hooks/orders/useOrder";
import { COUNTRIES } from "@/lib/constants";
import type { OrderFromCheckout } from "@/typings/order";

const formFields: {
  name: "country" | "address" | "postal_code";
  label: string;
  type: string;
  className?: string;
}[] = [
  {
    name: "address",
    label: "Delivery address",
    type: "text",
    className: "col-span-2",
  },
  {
    name: "country",
    label: "Country/Region",
    type: "text",
  },
  {
    name: "postal_code",
    label: "Postal code",
    type: "text",
  },
];

const formSchema = z.object({
  country: z
    .string()
    .nonempty({ message: "Please select a country or region." }),
  address: z
    .string()
    .min(2, "Address must be at least 5 characters.")
    .max(100, "Address must be at most 100 characters."),
  postal_code: z
    .string()
    .min(2, "Postal code must be at least 2 characters.")
    .max(10, "Postal code must be at most 10 characters."),
});

function CheckoutForm() {
  const { mutate, isPending } = useOrder();
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      address: "",
      country: "",
      postal_code: "",
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmitCapture() {
    for (const error of Object.entries(form.formState.errors)) {
      if (error[1]) toast.error(error[1].message);
    }
  }

  function onSubmit(formData: OrderFromCheckout) {
    mutate(formData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          onSubmit(values as OrderFromCheckout)
        )}
        onSubmitCapture={onSubmitCapture}
        className="grid grid-cols-2 gap-4 sm:w-[28rem]"
      >
        {formFields.map(({ name, label, type, className }) => (
          <FormField
            control={form.control}
            key={name}
            name={name}
            render={({ field }) => (
              <FormItem className={className}>
                <FormControl>
                  {field.name === "country" ? (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Country/Region" />
                      </SelectTrigger>
                      <SelectContent sideOffset={8}>
                        {COUNTRIES.map((country) => (
                          <SelectItem value={country} key={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <FloatingLabelInput
                      {...field}
                      type={type}
                      id={name}
                      label={label}
                      disabled={isPending}
                      className="[&_input]:bg-secondary [&_label]:text-foreground/80"
                    />
                  )}
                </FormControl>
              </FormItem>
            )}
          />
        ))}

        <Button
          type="submit"
          className="w-full col-span-2 mt-4"
          disabled={isPending}
        >
          Place order
        </Button>
      </form>
    </Form>
  );
}

export default CheckoutForm;
