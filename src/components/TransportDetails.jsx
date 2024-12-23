import React from 'react';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

function TransportDetails({ form }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Détails du transport</h3>
      <FormField
        control={form.control}
        name="transportType"
        render={() => (
          <FormItem>
            <FormLabel>Type de transport</FormLabel>
            <div className="space-y-2">
              {['VSL', 'Ambulance', 'Taxi'].map((type) => (
                <FormField
                  key={type}
                  control={form.control}
                  name="transportType"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(type)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, type])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== type
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {type}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="departureAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Adresse de départ</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="arrivalAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Adresse d'arrivée</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="transportDateTime"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date et heure du transport</FormLabel>
            <FormControl>
              <Input type="datetime-local" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default TransportDetails;

