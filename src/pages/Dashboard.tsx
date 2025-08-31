import Layout from '../components/Layout';
import { ChevronRight, ChevronDown } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import banner3 from '../assets/banner3.png';
import workoutIcon from '../assets/workout-card.png';
import caloriesIcon from '../assets/calories-card.png';
import stepsIcon from '../assets/steps-card.png';
import mondayImg from '../assets/monday.png';
import tuesdayImg from '../assets/tuesday.png';
import wednesdayImg from '../assets/wednesday.png';
import offer from '../assets/offer.png';
import burger from '../assets/burger.png';
import burrito from '../assets/burrito.png';

const Dashboard = () => {
  // Sample data for charts
  const weeklyData = [
    { day: 'Mon', workout: 30, calories: 45, steps: 65 },
    { day: 'Tue', workout: 45, calories: 40, steps: 55 },
    { day: 'Wed', workout: 65, calories: 55, steps: 50 },
    { day: 'Thu', workout: 55, calories: 48, steps: 45 },
    { day: 'Fri', workout: 40, calories: 60, steps: 70 },
    { day: 'Sat', workout: 50, calories: 45, steps: 60 },
    { day: 'Sun', workout: 35, calories: 50, steps: 40 },
  ];

  const areaData = [
    { x: 0, value: 20 },
    { x: 1, value: 15 },
    { x: 2, value: 25 },
    { x: 3, value: 20 },
    { x: 4, value: 30 },
    { x: 5, value: 25 },
    { x: 6, value: 35 },
    { x: 7, value: 30 },
  ];

  const mealData = [
    { id: 1, food: 'Burrito', meal: 'Pizza Burger', calories: 'Receiving', time: '01:00 AM', carbs: '20 gm', img: burrito },
    { id: 2, food: 'Burger', meal: 'Pizza Burger', calories: 'Receiving', time: '01:00 AM', carbs: '20 gm', img: burger },
  ];

  const scheduleData = [
    { day: 'Monday', activity: 'Stretch', time: '20 Sets', time2: 'At 08:00', img: mondayImg },
    { day: 'Tuesday', activity: 'Back Stretch', time: '10 Round', time2: 'At 08:00', img: tuesdayImg },
    { day: 'Wednesday', activity: 'Yoga', time: '30 min', time2: 'At 08:00', img: wednesdayImg },
  ];

  const goals = [
    { title: 'ABS & Stretch', date: 'Saturday, April 14 08:00 AM', timeLeft: '30 Monday' },
    { title: 'Push Up', date: 'Sunday, April 15 08:00 AM', timeLeft: '60 Saturday' },
  ];

  return (
    <Layout>
      <div className="p-4 lg:p-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300"></div>
          
          <div className="relative flex items-center min-h-[180px] xs:min-h-[200px] sm:min-h-[220px] md:min-h-[240px] lg:min-h-[260px]">
            <div className="relative z-10 p-6 lg:p-8 flex-1 max-w-[50%] sm:max-w-[55%] lg:max-w-[50%]">
              <h1 className="text-white font-bold mb-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
                Track Your Daily Activities
              </h1>
              <p className="text-white/90 text-[11px] xs:text-xs sm:text-sm md:text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing elit, sed do eiusmod
              </p>
            </div>
            
            <div className="absolute right-0 top-0 bottom-0 w-[50%] sm:w-[45%] lg:w-[56%]">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-orange-400 to-transparent z-10"></div>
              <img 
                src={banner3}
                alt="Woman doing yoga stretch" 
                className="w-full h-full object-cover object-left-top"
                style={{ objectPosition: '20% 50%' }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Workout Card */}
              <div className="bg-cyan-500 rounded-2xl p-5 text-white relative overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl cursor-pointer min-h-52">
                <div className="flex gap-3 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <img src={workoutIcon} alt="Workout" className="w-12 h-12" />
                  </div>
                  <div className="items-center">
                    <h3 className="text-base font-medium mb-1">Workout</h3>
                    <p className="text-sm text-cyan-100">4 hrs</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={areaData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="workoutGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity={0.4}/>
                          <stop offset="100%" stopColor="#ffffff" stopOpacity={0.05}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#ffffff" 
                        strokeWidth={0.2} 
                        fill="url(#workoutGradient)"
                        dot={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Calories Card */}
              <div className="bg-orange-500 rounded-2xl p-5 text-white relative overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl cursor-pointer min-h-52">
                <div className="flex gap-3 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <img src={caloriesIcon} alt="Calories" className="w-12 h-12" />
                  </div>
                  <div className="items-center">
                    <h3 className="text-base font-medium mb-1">Calories</h3>
                    <p className="text-sm text-orange-100">1800 kcl</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={areaData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="caloriesGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity={0.4}/>
                          <stop offset="100%" stopColor="#ffffff" stopOpacity={0.05}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#ffffff" 
                        strokeWidth={0.2} 
                        fill="url(#caloriesGradient)"
                        dot={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Steps Card */}
              <div className="bg-purple rounded-2xl p-5 text-white relative overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl cursor-pointer min-h-52">
                <div className="flex gap-3 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <img src={stepsIcon} alt="Steps" className="w-12 h-12" />
                  </div>
                  <div className="items-center">
                    <h3 className="text-base font-medium mb-1">Steps</h3>
                    <p className="text-sm text-purple-100">2200 steps</p>

                  </div>
                  
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={areaData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="stepsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ffffff" stopOpacity={0.3}/>
                          <stop offset="100%" stopColor="#ffffff" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#ffffff" 
                        strokeWidth={0.2} 
                        fill="url(#stepsGradient)"
                        dot={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Goal Progress Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Goal Progress</h2>
                <div className="relative">
                  <button className="flex items-center gap-2 text-sm border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
                    <span>Weekly</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
              
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={weeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                  <XAxis 
                    dataKey="day" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#9CA3AF' }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#9CA3AF' }}
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 100]}
                    ticks={[0, 20, 40, 60, 80, 100]}
                  />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Bar dataKey="workout" fill="#00D9FF" radius={[6, 6, 6, 6]} barSize={10} />
                  <Bar dataKey="calories" fill="#FF6B35" radius={[6, 6, 6, 6]} barSize={10} />
                  <Bar dataKey="steps" fill="#9747FF" radius={[6, 6, 6, 6]} barSize={10} />
                </BarChart>
              </ResponsiveContainer>

              <div className="flex items-center gap-6 mt-4 pl-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-sm text-gray-600">Workout</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">Calories</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple rounded-full"></div>
                  <span className="text-sm text-gray-600">Steps</span>
                </div>
              </div>
            </div>

            {/* Food Table */}
            
            {/* Table Header */}
            <div className="pt-5 grid grid-cols-5 text-left text-sm font-medium text-gray-700 ">
              <div className='px-4'>Food</div>
              <div className='px-4'>Meal</div>
              <div className='px-4'>Calories</div>
              <div className='px-4'>Priorities</div>
              <div className='px-4'>Carbs</div>
            </div>

            {/* Table Body */}
            <div className="space-y-4">
              {mealData.map((meal) => (
                <div
                  key={meal.id}
                  className="grid grid-cols-5 items-center bg-white rounded-2xl shadow-sm p-4"
                >
                  {/* Food */}
                  <div className="flex items-center gap-3">
                    <img
                      src={meal.img}
                      alt={meal.food}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                    <span className="font-medium text-gray-900">{meal.food}</span>
                  </div>

                  {/* Meal */}
                  <div className="text-gray-600">{meal.meal}</div>

                  {/* Calories */}
                  <div className="text-gray-600">{meal.calories}</div>

                  {/* Priorities */}
                  <div className="text-gray-600 px-3 ">{meal.time}</div>

                  {/* Carbs */}
                  <div className="text-gray-600 px-5">{meal.carbs}</div>
                </div>
              ))}
            </div>
          </div>


          {/* Right Column */}
          <div className="space-y-6">
            {/* My Schedule */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">My Schedule</h2>
                <button className="text-primary text-sm font-medium flex items-center gap-1 hover:text-orange-600 transition-colors">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-5">
                {scheduleData.map((schedule, index) => (
                  <div key={index} className="bg-white rounded-2xl p-4 flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{schedule.day}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <img src={schedule.img} alt={schedule.day} className="w-12 h-12" />
                        <span className="text-sm text-gray-500"> {schedule.activity}</span>
                        <span className="text-sm text-gray-400">{schedule.time2}</span>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full">{schedule.time}</span>

                  </div>
                ))}
              </div>

            {/* Goals */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Goals</h2>
                <button className="text-primary text-sm font-medium flex items-center gap-1 hover:text-orange-600 transition-colors">
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-5">
                {goals.map((goal, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-4 flex flex-col"
                  >
                    {/* Title */}
                    <h4 className="font-medium text-gray-900 text-sm">{goal.title}</h4>

                    {/* Date & Time */}
                    <div className="flex justify-between mt-2">
                      <p className="text-xs text-gray-500">{goal.date}</p>
                      <p className="text-sm font-medium text-orange-500 bg-orange-50 px-3 py-1 rounded-full">{goal.timeLeft}</p>
                    </div>
                  </div>
                ))}
              </div>

            {/* Premium Card */}
            <div className="bg-gradient-to-br from-purple to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden min-h-52">
              <div className="relative z-10">
                <h3 className="text-lg font-semibold mb-2">50% off on Premium Membership</h3>
                <p className="text-sm text-purple-100 mb-4 leading-relaxed">
                  Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit
                </p>
                <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  Upgrade
                </button>
              </div>
              <div className="absolute right-0 bottom-0 w-36 h-36">
                <img
                  src={offer}
                  alt="Premium"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;