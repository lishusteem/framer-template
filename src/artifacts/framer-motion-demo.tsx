import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FramerMotionDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Framer Motion Demo
          </h1>
          <p className="text-lg text-gray-600">
            This demonstrates how to use Framer Motion in the Claude Artifact Runner template
          </p>
        </motion.div>

        {/* Fade In Animation */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Fade In Animation</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-100 p-6 rounded-lg"
            >
              <p className="text-center text-blue-800">
                This card fades in with a scale effect when the page loads
              </p>
            </motion.div>
          </CardContent>
        </Card>

        {/* Interactive Animation */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Animation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <Button
                onClick={() => setIsVisible(!isVisible)}
                className="mb-4"
              >
                {isVisible ? 'Hide' : 'Show'} Animated Box
              </Button>
              
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10 
                }}
                className="w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white font-bold"
              >
                Animated!
              </motion.div>
            </div>
          </CardContent>
        </Card>

        {/* Hover Animation */}
        <Card>
          <CardHeader>
            <CardTitle>Hover Animations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 5,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg text-white text-center cursor-pointer"
                >
                  <h3 className="font-bold text-lg mb-2">Card {item}</h3>
                  <p>Hover and click me!</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Counter with Animation */}
        <Card>
          <CardHeader>
            <CardTitle>Animated Counter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center space-y-4">
              <Button onClick={() => setCount(count + 1)}>
                Increment Counter
              </Button>
              
              <motion.div
                key={count}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-6xl font-bold text-indigo-600"
              >
                {count}
              </motion.div>
            </div>
          </CardContent>
        </Card>

        {/* Staggered Animation */}
        <Card>
          <CardHeader>
            <CardTitle>Staggered List Animation</CardTitle>
          </CardHeader>
          <CardContent>
            <motion.ul className="space-y-2">
              {["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1 
                  }}
                  className="bg-gray-100 p-3 rounded-lg"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FramerMotionDemo; 