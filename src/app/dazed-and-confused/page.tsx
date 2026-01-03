"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Move } from "lucide-react";

const FoodChoicePresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rankings, setRankings] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

  const factors = [
    {
      id: "health",
      name: "Personal Health",
      description: "Nutritional value, dietary restrictions, allergies",
      icon: "🥗",
    },
    {
      id: "environment",
      name: "Environmental Impact",
      description: "Carbon footprint, water usage, packaging waste",
      icon: "🌍",
    },
    {
      id: "ethics",
      name: "Ethical Production",
      description: "Labor practices, fair wages, working conditions",
      icon: "🤝",
    },
    {
      id: "animal",
      name: "Animal Welfare",
      description: "Treatment of animals, farming practices",
      icon: "🐄",
    },
    {
      id: "cost",
      name: "Cost",
      description: "Price, value for money, budget constraints",
      icon: "💰",
    },
    {
      id: "taste",
      name: "Taste & Enjoyment",
      description: "Flavor, personal preferences, food satisfaction",
      icon: "😋",
    },
    {
      id: "convenience",
      name: "Convenience",
      description: "Preparation time, accessibility, shelf life",
      icon: "⚡",
    },
    {
      id: "local",
      name: "Local & Seasonal",
      description: "Supporting local economy, freshness, food miles",
      icon: "🏪",
    },
    {
      id: "cultural",
      name: "Cultural & Social",
      description: "Traditions, family preferences, social occasions",
      icon: "🎉",
    },
  ];

  const slides = [
    {
      title: "What Should I Eat?",
      subtitle: "A totally simple question with absolutely no complications whatsoever",
      content: (
        <div className="space-y-6 text-center">
          <div className="text-6xl">🤔</div>
          <p className="text-gray-700 text-xl">
            Welcome! Let's figure out why buying an apple is somehow more complicated than choosing
            a cloud provider.
          </p>
        </div>
      ),
    },
    {
      title: "A Brief History of Food Decisions",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="mb-2 text-xl font-bold">10,000 BCE</h3>
            <p className="text-gray-700">"Is this plant poisonous?"</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="mb-2 text-xl font-bold">1950</h3>
            <p className="text-gray-700">"Can we afford meat this week?"</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="mb-2 text-xl font-bold">2024</h3>
            <p className="text-gray-700">
              "Is this quinoa ethically sourced, carbon-neutral, non-GMO, locally grown by workers
              earning a living wage, packaged in compostable materials, and also will it arrive in 2
              hours?"
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "The Modern Food Paradox",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 text-lg">We have:</p>
          <ul className="text-gray-700 space-y-3">
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✅</span>
              <span>More food choices than ever before</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✅</span>
              <span>More information about food than any generation in history</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">✅</span>
              <span>More competing priorities and values to consider</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-2xl">❌</span>
              <span>Absolutely no clearer idea of what to buy</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "The Decision Factors",
      subtitle: "Or: Why that avocado toast is giving you an existential crisis",
      content: (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {factors.map((factor) => (
            <div key={factor.id} className="border-gray-200 rounded-lg border-2 bg-white p-4">
              <div className="mb-2 flex items-center">
                <span className="mr-3 text-3xl">{factor.icon}</span>
                <h3 className="text-lg font-bold">{factor.name}</h3>
              </div>
              <p className="text-gray-600 text-sm">{factor.description}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Let's Get Real",
      content: (
        <div className="space-y-6 text-center">
          <p className="text-gray-700 text-xl">You can't optimize for everything.</p>
          <p className="text-gray-600 text-lg">(Trust us, we've tried. The spreadsheet crashed.)</p>
          <div className="bg-yellow-50 border-yellow-200 mt-8 rounded-lg border-2 p-6">
            <p className="text-gray-800 text-lg font-semibold">The good news: You don't have to.</p>
            <p className="text-gray-700 mt-2">But you do need to know what matters most to YOU.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Interactive Exercise: Rank Your Priorities",
      subtitle: "Drag and drop to arrange from most to least important",
      content: (
        <RankingExercise
          factors={factors}
          rankings={rankings}
          setRankings={setRankings}
          draggedItem={draggedItem}
          setDraggedItem={setDraggedItem}
        />
      ),
    },
    {
      title: "Your Personalized Framework",
      content: <PersonalizedFramework rankings={rankings} factors={factors} />,
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="from-blue-50 to-green-50 min-h-screen bg-gradient-to-br p-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex min-h-[600px] flex-col rounded-xl bg-white p-8 shadow-2xl">
          <div className="mb-8">
            <h1 className="text-gray-800 mb-2 text-4xl font-bold">{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && (
              <p className="text-gray-600 text-lg italic">{slides[currentSlide].subtitle}</p>
            )}
          </div>

          <div className="flex-1 overflow-y-auto">{slides[currentSlide].content}</div>

          <div className="mt-8 flex items-center justify-between border-t pt-4">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="bg-gray-200 hover:bg-gray-300 flex items-center rounded-lg px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronLeft className="mr-2" size={20} />
              Previous
            </button>

            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 w-2 rounded-full ${
                    idx === currentSlide ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center rounded-lg bg-accent2-dark px-4  py-2 text-white hover:bg-accent2-light disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
              <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const RankingExercise = ({ factors, rankings, setRankings, draggedItem, setDraggedItem }) => {
  React.useEffect(() => {
    if (rankings.length === 0) {
      setRankings([...factors]);
    }
  }, []);

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedItem === null || draggedItem === index) return;

    const newRankings = [...rankings];
    const draggedElement = newRankings[draggedItem];
    newRankings.splice(draggedItem, 1);
    newRankings.splice(index, 0, draggedElement);

    setDraggedItem(index);
    setRankings(newRankings);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  if (rankings.length === 0) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <p className="text-gray-600 mb-4">
        Arrange these factors from most important (top) to least important (bottom) for your
        personal food purchasing decisions.
      </p>
      <div className="space-y-2">
        {rankings.map((factor, index) => (
          <div
            key={factor.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            className={`hover:border-blue-400 cursor-move rounded-lg border-2 bg-white p-4 transition-all ${
              draggedItem === index ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-1 items-center">
                <span className="text-gray-400 mr-4 w-8 text-2xl font-bold">{index + 1}</span>
                <span className="mr-3 text-3xl">{factor.icon}</span>
                <div>
                  <h3 className="text-lg font-bold">{factor.name}</h3>
                  <p className="text-gray-600 text-sm">{factor.description}</p>
                </div>
              </div>
              <Move className="text-gray-400" size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PersonalizedFramework = ({ rankings, factors }) => {
  if (rankings.length === 0) {
    return (
      <div className="text-gray-600 text-center">
        <p>Complete the ranking exercise to see your personalized framework!</p>
      </div>
    );
  }

  const top3 = rankings.slice(0, 3);
  const middle = rankings.slice(3, 6);
  const lower = rankings.slice(6);

  return (
    <div className="space-y-6">
      <div className="bg-green-50 border-green-200 rounded-lg border-2 p-6">
        <h3 className="text-green-800 mb-4 text-2xl font-bold">Your Core Values (Top 3)</h3>
        <p className="text-gray-700 mb-4">
          These are your non-negotiables. Use these as your first filter for any food decision.
        </p>
        <ul className="space-y-2">
          {top3.map((factor, idx) => (
            <li key={factor.id} className="flex items-center">
              <span className="mr-3 text-2xl">{factor.icon}</span>
              <span className="font-semibold">{factor.name}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded bg-white p-4">
          <p className="mb-2 font-semibold">Your Decision Rule:</p>
          <p className="text-gray-700 text-sm">
            "Before I buy anything, I ask: Does this align with my priorities around{" "}
            {top3[0].name.toLowerCase()}, {top3[1].name.toLowerCase()}, and{" "}
            {top3[2].name.toLowerCase()}? If not, I look for alternatives."
          </p>
        </div>
      </div>

      <div className="bg-yellow-50 border-yellow-200 rounded-lg border-2 p-6">
        <h3 className="text-yellow-800 mb-4 text-2xl font-bold">Your Secondary Considerations</h3>
        <p className="text-gray-700 mb-4">
          These matter, but you're willing to compromise when necessary.
        </p>
        <ul className="space-y-2">
          {middle.map((factor) => (
            <li key={factor.id} className="flex items-center">
              <span className="mr-3 text-2xl">{factor.icon}</span>
              <span>{factor.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {lower.length > 0 && (
        <div className="bg-gray-50 border-gray-200 rounded-lg border-2 p-6">
          <h3 className="text-gray-800 mb-4 text-2xl font-bold">Nice to Have</h3>
          <p className="text-gray-700 mb-4">
            These are bonuses, but you won't let them drive your decisions.
          </p>
          <ul className="space-y-2">
            {lower.map((factor) => (
              <li key={factor.id} className="flex items-center">
                <span className="mr-3 text-2xl">{factor.icon}</span>
                <span>{factor.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="bg-blue-50 border-blue-200 rounded-lg border-2 p-6">
        <h3 className="text-blue-800 mb-4 text-2xl font-bold">Your Action Plan</h3>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 font-bold">1. Set Your Standards</h4>
            <p className="text-gray-700 text-sm">
              Based on your top priority ({top3[0].name}), identify 2-3 concrete criteria. For
              example, if Health is #1: "I prioritize whole foods, minimize processed items, and
              read ingredient labels."
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-bold">2. Create Simple Rules</h4>
            <p className="text-gray-700 text-sm">
              Develop shortcuts for common decisions. Example: "I buy organic for the 'Dirty Dozen'
              produce, conventional for everything else" or "I only buy meat from vendors X, Y, Z."
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-bold">3. Plan Your Compromises</h4>
            <p className="text-gray-700 text-sm">
              Decide in advance when you'll flex. Example: "When traveling or at social events, I
              relax my standards" or "I'll pay 20% more but not 100% more for my values."
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-bold">4. Review Quarterly</h4>
            <p className="text-gray-700 text-sm">
              Your priorities might shift. Check in every few months: Are you still following your
              rules? Do they still feel right? Adjust as needed.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 border-purple-200 rounded-lg border-2 p-6 text-center">
        <h3 className="text-purple-800 mb-3 text-xl font-bold">Remember:</h3>
        <p className="text-gray-700">
          Perfect is the enemy of good. Your framework should make decisions EASIER, not harder. If
          you find yourself paralyzed in the grocery store, you've overcomplicated it.
        </p>
        <p className="text-gray-700 mt-2 font-semibold">
          The best food choice is the one you can actually sustain. 🎯
        </p>
      </div>
    </div>
  );
};

export default FoodChoicePresentation;
