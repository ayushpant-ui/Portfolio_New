"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  LabelList,
} from "recharts";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const semesterData = [
  { sem: "Sem 1", gpa: 3.79 },
  { sem: "Sem 2", gpa: 3.88 },
  { sem: "Sem 3", gpa: '' },
  { sem: "Sem 4", gpa: '' },
  { sem: "Sem 5", gpa: '' },
  { sem: "Sem 6", gpa:''  },
  { sem: "Sem 7", gpa: '' },
  { sem: "Sem 8", gpa: '' },
];

export default function GPAChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <div className="mb-8 flex items-center gap-4">

        <div
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{ background: "var(--accent)" }}
        >
          <FaGraduationCap
            className="text-2xl text-white"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-white">
            Semester GPA
          </h2>

          <p className="text-gray-400">
            GPA Progress (Maximum 4.0)
          </p>
        </div>

      </div>

      <div className="h-[450px]">

        <ResponsiveContainer>

          <BarChart data={semesterData}>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#1f2937"
            />

            <XAxis
              dataKey="sem"
              stroke="#9ca3af"
            />

            <YAxis
              domain={[0,4]}
              stroke="#9ca3af"
            />

            <Tooltip />

            <Bar
              dataKey="gpa"
              radius={[10,10,0,0]}
            >

              <LabelList
                dataKey="gpa"
                position="top"
                fill="#fff"
              />

              {semesterData.map((item,index)=>(
                <Cell
                  key={index}
                  fill="var(--accent)"
                />
              ))}

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </motion.div>
  );
}