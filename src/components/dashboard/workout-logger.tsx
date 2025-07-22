'use client';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dumbbell, Bike, Footprints, Clock, Repeat, Weight, Route } from 'lucide-react';

type ActivityType = 'weights' | 'cardio' | 'bodyweight';

export function WorkoutLogger() {
    const [activity, setActivity] = useState<ActivityType>('weights');

    return (
        <Card>
            <CardHeader>
                <CardTitle>Log a Workout</CardTitle>
                <CardDescription>What did you accomplish today?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="activity-type">Activity Type</Label>
                    <Select onValueChange={(value: ActivityType) => setActivity(value)} defaultValue={activity}>
                        <SelectTrigger id="activity-type">
                            <SelectValue placeholder="Select an activity" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="weights"><Dumbbell className="inline-block mr-2 h-4 w-4" />Weight Training</SelectItem>
                            <SelectItem value="cardio"><Bike className="inline-block mr-2 h-4 w-4" />Cardio</SelectItem>
                            <SelectItem value="bodyweight"><Footprints className="inline-block mr-2 h-4 w-4" />Bodyweight</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Common Field */}
                    <div className="space-y-2">
                        <Label htmlFor="duration">Duration (minutes)</Label>
                        <div className="relative">
                            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input id="duration" type="number" placeholder="e.g. 45" className="pl-10" />
                        </div>
                    </div>

                    {/* Conditional Fields */}
                    {activity === 'weights' && (
                        <>
                            <div className="space-y-2">
                                <Label htmlFor="sets">Sets</Label>
                                 <div className="relative">
                                    <Repeat className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="sets" type="number" placeholder="e.g. 3" className="pl-10" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="reps">Reps</Label>
                                 <div className="relative">
                                    <Repeat className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="reps" type="number" placeholder="e.g. 12" className="pl-10" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="weight">Weight (kg)</Label>
                                <div className="relative">
                                    <Weight className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="weight" type="number" placeholder="e.g. 50" className="pl-10" />
                                </div>
                            </div>
                        </>
                    )}
                    {activity === 'cardio' && (
                        <div className="space-y-2">
                            <Label htmlFor="distance">Distance (km)</Label>
                             <div className="relative">
                                <Route className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="distance" type="number" placeholder="e.g. 5" className="pl-10" />
                            </div>
                        </div>
                    )}
                    {activity === 'bodyweight' && (
                         <>
                            <div className="space-y-2">
                                <Label htmlFor="sets-bw">Sets</Label>
                                <div className="relative">
                                    <Repeat className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="sets-bw" type="number" placeholder="e.g. 3" className="pl-10" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="reps-bw">Reps</Label>
                                <div className="relative">
                                    <Repeat className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input id="reps-bw" type="number" placeholder="e.g. 15" className="pl-10" />
                                </div>
                            </div>
                        </>
                    )}
                </div>

            </CardContent>
            <CardFooter>
                 <Button className="w-full">Log Workout</Button>
            </CardFooter>
        </Card>
    );
}
