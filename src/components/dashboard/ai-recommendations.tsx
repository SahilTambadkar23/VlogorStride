'use client';
import { useState } from 'react';
import { recommendNextExercises } from '@/ai/flows/recommend-next-exercises';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sparkles, Bot } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type AiState = {
    recommendations: string;
    explanation: string;
    error: string | null;
}

export function AiRecommendations() {
    const [history, setHistory] = useState('');
    const [goals, setGoals] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<AiState | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        try {
            const res = await recommendNextExercises({
                workoutHistory: history,
                fitnessGoals: goals,
            });
            setResult({ recommendations: res.recommendedExercises, explanation: res.explanation, error: null });
        } catch (error) {
            console.error(error);
            setResult({ recommendations: '', explanation: '', error: 'Failed to get recommendations. Please try again.' });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <CardHeader>
                    <div className="flex items-center gap-2">
                        <Sparkles className="text-primary" />
                        <CardTitle>AI Workout Advisor</CardTitle>
                    </div>
                    <CardDescription>Get personalized workout recommendations based on your history and goals.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="workout-history">Your recent workout history</Label>
                            <Textarea 
                                id="workout-history" 
                                placeholder="e.g., 'Last week: Mon - 5km run, Wed - Bench press 3x8 at 60kg, Fri - 30 min yoga'" 
                                value={history}
                                onChange={(e) => setHistory(e.target.value)}
                                rows={4}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="fitness-goals">Your current fitness goals</Label>
                            <Textarea 
                                id="fitness-goals" 
                                placeholder="e.g., 'Build upper body strength and improve cardio endurance.'"
                                value={goals}
                                onChange={(e) => setGoals(e.target.value)}
                                rows={4}
                                required
                             />
                        </div>
                    </div>
                    {loading && (
                        <div className="space-y-4 pt-4">
                           <div className="flex items-center gap-4">
                               <Skeleton className="h-12 w-12 rounded-full" />
                               <div className="space-y-2">
                                   <Skeleton className="h-4 w-[250px]" />
                                   <Skeleton className="h-4 w-[200px]" />
                               </div>
                           </div>
                           <Skeleton className="h-4 w-full" />
                           <Skeleton className="h-4 w-3/4" />
                        </div>
                    )}
                    {result && !loading && (
                         <div className="pt-4">
                            {result.error ? (
                                <Alert variant="destructive">
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>{result.error}</AlertDescription>
                                </Alert>
                            ) : (
                                <Alert>
                                    <Bot className="h-4 w-4" />
                                    <AlertTitle>Your AI Recommendations</AlertTitle>
                                    <AlertDescription>
                                        <h4 className="font-bold mt-4 mb-2">Recommended Exercises:</h4>
                                        <p className="mb-4 whitespace-pre-wrap">{result.recommendations}</p>
                                        <h4 className="font-bold mb-2">Why these are for you:</h4>
                                        <p className="whitespace-pre-wrap">{result.explanation}</p>
                                    </AlertDescription>
                                </Alert>
                            )}
                         </div>
                    )}

                </CardContent>
                <CardFooter>
                    <Button type="submit" disabled={loading || !history || !goals}>
                        {loading ? 'Thinking...' : 'Get Recommendations'}
                        <Sparkles className="ml-2" />
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}
