import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import PersonalInfo from './PersonalInfo';
import TransportDetails from './TransportDetails';
import MedicalInfo from './MedicalInfo';
import DepartmentSelection from './DepartmentSelection';
import FormSubmission from './FormSubmission';

// Définition du schéma de validation avec Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Le nom et prénom sont obligatoires" }),
  dateOfBirth: z.string().min(1, { message: "La date de naissance est obligatoire" }),
  phone: z.string().min(1, { message: "Le numéro de téléphone est obligatoire" }),
  email: z.string().email({ message: "L'adresse email n'est pas valide" }).optional().or(z.literal('')),
  transportType: z.array(z.enum(['VSL', 'Ambulance', 'Taxi'])).min(1, { message: "Sélectionnez au moins un type de transport" }),
  departureAddress: z.string().min(1, { message: "L'adresse de départ est obligatoire" }),
  arrivalAddress: z.string().min(1, { message: "L'adresse d'arrivée est obligatoire" }),
  transportDateTime: z.string().min(1, { message: "La date et l'heure du transport sont obligatoires" }),
  transportReason: z.enum(['Consultation médicale', 'Hospitalisation', 'Retour à domicile', 'Autre']),
  otherReason: z.string().optional(),
  needsAssistance: z.boolean(),
  assistanceDetails: z.string().optional(),
  department: z.string().min(1, { message: "La sélection d'un département est obligatoire" }),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "Vous devez accepter les Conditions Générales d'Utilisation" }),
  }),
});

function TransportRequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      transportType: [],
      needsAssistance: false,
      acceptTerms: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <p className="text-center text-green-600">
            Votre demande a bien été envoyée ! Les professionnels disponibles dans votre département sont en cours de notification. Vous serez contacté rapidement.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-blue-800 text-xl font-semibold">
              Demande de transport médical
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <PersonalInfo form={form} />
            <TransportDetails form={form} />
            <MedicalInfo form={form} />
            <DepartmentSelection form={form} />
            <FormSubmission form={form} />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-all"
            >
              Envoyer ma demande
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}

export default TransportRequestForm;


