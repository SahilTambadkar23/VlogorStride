'use server';

/**
 * @fileOverview Provides personalized exercise recommendations based on workout history and goals.
 *
 * - recommendNextExercises - A function that recommends exercises based on user data.
 * - RecommendNextExercisesInput - The input type for the recommendNextExercises function.
 * - RecommendNextExercisesOutput - The return type for the recommendNextExercises function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendNextExercisesInputSchema = z.object({
  workoutHistory: z
    .string()
    .describe('The user\'s workout history, including types of exercises, sets, reps, weight used, and duration.'),
  fitnessGoals: z
    .string()
    .describe('The user\'s fitness goals, such as building muscle, losing weight, or improving endurance.'),
});
export type RecommendNextExercisesInput = z.infer<
  typeof RecommendNextExercisesInputSchema
>;

const RecommendNextExercisesOutputSchema = z.object({
  recommendedExercises: z
    .string()
    .describe(
      'A list of recommended exercises based on the user\'s workout history and fitness goals.'
    ),
  explanation: z
    .string()
    .describe(
      'An explanation of why these exercises are recommended, considering the user\'s workout history and goals.'
    ),
});
export type RecommendNextExercisesOutput = z.infer<
  typeof RecommendNextExercisesOutputSchema
>;

export async function recommendNextExercises(
  input: RecommendNextExercisesInput
): Promise<RecommendNextExercisesOutput> {
  return recommendNextExercisesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendNextExercisesPrompt',
  input: {schema: RecommendNextExercisesInputSchema},
  output: {schema: RecommendNextExercisesOutputSchema},
  prompt: `You are a personal fitness trainer. Based on the user's workout history and fitness goals,
you will provide personalized exercise recommendations and explain why they are beneficial.

Workout History: {{{workoutHistory}}}
Fitness Goals: {{{fitnessGoals}}}

Recommended Exercises:
`,
});

const recommendNextExercisesFlow = ai.defineFlow(
  {
    name: 'recommendNextExercisesFlow',
    inputSchema: RecommendNextExercisesInputSchema,
    outputSchema: RecommendNextExercisesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
