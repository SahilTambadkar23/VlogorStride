'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { day: "Mon", minutes: 55 },
  { day: "Tue", minutes: 45 },
  { day: "Wed", minutes: 70 },
  { day: "Thu", minutes: 30 },
  { day: "Fri", minutes: 60 },
  { day: "Sat", minutes: 90 },
  { day: "Sun", minutes: 20 },
];

const chartConfig = {
  minutes: {
    label: "Minutes",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function ProgressChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Activity</CardTitle>
        <CardDescription>Total workout minutes this week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              stroke="hsl(var(--muted-foreground))"
            />
             <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => `${value}m`}
              stroke="hsl(var(--muted-foreground))"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
            />
            <Bar dataKey="minutes" fill="var(--color-minutes)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
