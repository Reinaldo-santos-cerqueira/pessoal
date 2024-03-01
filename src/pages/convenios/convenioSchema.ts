import { z } from 'zod';

export const convenioSchema = z.object({
	convenio: z.string({ required_error: 'Digite o convenio' }).min(1, 'Digite o convenio'),
});
export type ConvenioSchema = z.infer<typeof convenioSchema>