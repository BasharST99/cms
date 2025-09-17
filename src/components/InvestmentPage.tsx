import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Calculator, BarChart3, TrendingUp, DollarSign, PieChart, Building2, 
  Home, Briefcase, Users, Shield, CheckCircle2, ArrowUpRight, Calendar,
  MapPin, Bed, Bath, Maximize2, Eye, Heart, Award, Clock, Target,
  LineChart, AlertTriangle, Star, Phone, Mail, Download, PlayCircle,
  Zap, TreePine, Car, Wifi, Building, Dumbbell, Filter
} from 'lucide-react';
import { motion } from 'motion/react';

// Investment Hero Section
function InvestmentHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0B3557] via-[#1a4b6b] to-[#2d5f7f] py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Build Wealth Through
            <span className="block text-[#bb9a74]">Real Estate Investment</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover premium investment opportunities in Saudi Arabia's fastest-growing real estate markets
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-[#bb9a74] hover:bg-[#bb9a74]/90 text-white">
              <Target className="h-5 w-5 mr-2" />
              Find Investment Properties
            </Button>
            <Button size="lg" variant="outline" className="border-white !text-[#0B3557] hover:bg-white hover:text-[#0B3557]">
              <Calculator className="h-5 w-5 mr-2" />
              Calculate Returns
            </Button>
          </div>

          {/* Key Investment Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">₹2.8B+</div>
              <div className="text-white/80">Total Investments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">8.5%</div>
              <div className="text-white/80">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/80">Investment Properties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">1,200+</div>
              <div className="text-white/80">Satisfied Investors</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Investment Types Section
function InvestmentTypes() {
  const investmentTypes = [
    {
      icon: Building2,
      title: "Commercial Real Estate",
      description: "Office buildings, retail spaces, and mixed-use developments",
      averageROI: "10-15%",
      minInvestment: "₹5M",
      riskLevel: "Medium",
      features: ["Stable cash flow", "Long-term leases", "Professional tenants", "Tax advantages"]
    },
    {
      icon: Home,
      title: "Residential Properties",
      description: "Apartments, villas, and townhouses in prime locations",
      averageROI: "7-12%",
      minInvestment: "₹1M",
      riskLevel: "Low",
      features: ["Easy to manage", "High demand", "Steady appreciation", "Rental income"]
    },
    {
      icon: Building,
      title: "Mixed-Use Developments",
      description: "Properties combining residential, commercial, and retail spaces",
      averageROI: "12-18%",
      minInvestment: "₹10M",
      riskLevel: "Medium-High",
      features: ["Diversified income", "Higher returns", "Modern amenities", "Strategic locations"]
    },
    {
      icon: Briefcase,
      title: "REIT Investments",
      description: "Real Estate Investment Trusts for portfolio diversification",
      averageROI: "6-10%",
      minInvestment: "₹100K",
      riskLevel: "Low-Medium",
      features: ["High liquidity", "Professional management", "Diversified portfolio", "Low entry barrier"]
    }
  ];

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Low-Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Medium': return 'text-orange-600 bg-orange-100';
      case 'Medium-High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from various investment types that match your risk profile and return expectations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {investmentTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-[#0B3557] rounded-2xl flex items-center justify-center">
                  <type.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              </div>

              {/* Investment Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-semibold text-[#0B3557]">{type.averageROI}</div>
                  <div className="text-sm text-gray-600">Avg. ROI</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-semibold text-[#0B3557]">{type.minInvestment}</div>
                  <div className="text-sm text-gray-600">Min. Investment</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Badge className={`${getRiskColor(type.riskLevel)} text-xs`}>
                    {type.riskLevel}
                  </Badge>
                  <div className="text-sm text-gray-600 mt-1">Risk Level</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {type.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-[#0B3557] hover:bg-[#0B3557]/90">
                Explore Properties
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Investment Properties
function FeaturedInvestmentProperties() {
  const [filter, setFilter] = useState('all');
  const [favorites, setFavorites] = useState([]);

  const properties = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      title: "Premium Office Tower - KAFD",
      location: "King Abdullah Financial District, Riyadh",
      price: "₹25,000,000",
      type: "commercial",
      propertyType: "Office Building",
      expectedROI: "12.5%",
      yearlyRent: "₹3,125,000",
      occupancyRate: "95%",
      totalUnits: 48,
      availableUnits: 2,
      features: ["Prime location", "Full occupancy", "Long-term leases", "Modern amenities"],
      riskScore: "Low",
      investmentGrade: "A+"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      title: "Luxury Residential Complex",
      location: "Al Nakheel District, Riyadh",
      price: "₹18,500,000",
      type: "residential",
      propertyType: "Apartment Complex",
      expectedROI: "9.8%",
      yearlyRent: "₹1,813,000",
      occupancyRate: "92%",
      totalUnits: 32,
      availableUnits: 5,
      features: ["High-end finishes", "Pool & gym", "24/7 security", "Parking included"],
      riskScore: "Low",
      investmentGrade: "A"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      title: "Mixed-Use Development",
      location: "Al Olaya, Riyadh",
      price: "₹35,000,000",
      type: "mixed",
      propertyType: "Mixed-Use",
      expectedROI: "15.2%",
      yearlyRent: "₹5,320,000",
      occupancyRate: "88%",
      totalUnits: 64,
      availableUnits: 8,
      features: ["Retail + Residential", "High foot traffic", "Modern design", "Strategic location"],
      riskScore: "Medium",
      investmentGrade: "A-"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
      title: "Waterfront Retail Plaza",
      location: "Corniche, Jeddah",
      price: "₹42,000,000",
      type: "commercial",
      propertyType: "Retail Plaza",
      expectedROI: "11.8%",
      yearlyRent: "₹4,956,000",
      occupancyRate: "96%",
      totalUnits: 24,
      availableUnits: 1,
      features: ["Waterfront views", "High-end retail", "Tourist area", "Premium brands"],
      riskScore: "Medium",
      investmentGrade: "A"
    }
  ];

  const toggleFavorite = (propertyId) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(prop => prop.type === filter);

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-orange-600 bg-orange-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'text-green-600 bg-green-100';
    if (grade.startsWith('B')) return 'text-blue-600 bg-blue-100';
    return 'text-gray-600 bg-gray-100';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Investment Properties</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hand-picked investment opportunities with proven track records and strong returns
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {['all', 'commercial', 'residential', 'mixed'].map((type) => (
            <Button
              key={type}
              variant={filter === type ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(type)}
              className={filter === type ? 'bg-[#0B3557] hover:bg-[#0B3557]/90' : ''}
            >
              {type === 'all' ? 'All Properties' : 
               type === 'mixed' ? 'Mixed-Use' :
               type.charAt(0).toUpperCase() + type.slice(1)}
            </Button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProperties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlays */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-[#0B3557] text-white">
                    {property.propertyType}
                  </Badge>
                  <Badge className={getGradeColor(property.investmentGrade)}>
                    Grade {property.investmentGrade}
                  </Badge>
                </div>

                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all ${
                      favorites.includes(property.id)
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 text-gray-700 hover:bg-white hover:text-red-500'
                    }`}
                  >
                    <Heart className="h-4 w-4" fill={favorites.includes(property.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* Price & ROI */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-xl font-bold text-[#0B3557]">{property.price}</div>
                  </div>
                  <div className="bg-green-500 text-white rounded-lg px-3 py-2">
                    <div className="font-semibold">{property.expectedROI} ROI</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
                    <div className="flex items-center gap-1 text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                  </div>

                  {/* Investment Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-600">Annual Rent</div>
                      <div className="font-semibold text-[#0B3557]">{property.yearlyRent}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-600">Occupancy</div>
                      <div className="font-semibold text-green-600">{property.occupancyRate}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-600">Total Units</div>
                      <div className="font-semibold">{property.totalUnits}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-sm text-gray-600">Risk Level</div>
                      <Badge className={getRiskColor(property.riskScore)} size="sm">
                        {property.riskScore}
                      </Badge>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-[#0B3557] hover:bg-[#0B3557]/90">
                      View Details
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Schedule Tour
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-[#0B3557] text-[#0B3557] hover:bg-[#0B3557] hover:text-white">
            View All Investment Properties
            <ArrowUpRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Advanced Investment Calculator
function AdvancedCalculator() {
  const [calculatorData, setCalculatorData] = useState({
    propertyValue: 5000000,
    downPayment: 25,
    loanTerm: 25,
    interestRate: 3.5,
    monthlyRent: 25000,
    occupancyRate: 90,
    propertyTax: 1.2,
    insurance: 0.8,
    maintenance: 2.5,
    management: 8,
    vacancy: 5,
    appreciation: 5
  });

  // Calculations
  const loanAmount = calculatorData.propertyValue * (1 - calculatorData.downPayment / 100);
  const monthlyPayment = loanAmount * (calculatorData.interestRate / 100 / 12) * 
    Math.pow(1 + calculatorData.interestRate / 100 / 12, calculatorData.loanTerm * 12) / 
    (Math.pow(1 + calculatorData.interestRate / 100 / 12, calculatorData.loanTerm * 12) - 1);
  
  const grossAnnualRent = calculatorData.monthlyRent * 12 * (calculatorData.occupancyRate / 100);
  const annualExpenses = (
    (calculatorData.propertyTax / 100) * calculatorData.propertyValue +
    (calculatorData.insurance / 100) * calculatorData.propertyValue +
    (calculatorData.maintenance / 100) * calculatorData.propertyValue +
    (calculatorData.management / 100) * grossAnnualRent +
    (calculatorData.vacancy / 100) * (calculatorData.monthlyRent * 12)
  );
  
  const netOperatingIncome = grossAnnualRent - annualExpenses;
  const annualCashFlow = netOperatingIncome - (monthlyPayment * 12);
  const cashOnCash = (annualCashFlow / (calculatorData.propertyValue * calculatorData.downPayment / 100)) * 100;
  const capRate = (netOperatingIncome / calculatorData.propertyValue) * 100;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Calculator</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Calculate detailed returns, cash flow, and investment metrics for any property
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Calculator className="h-6 w-6 text-[#0B3557]" />
              Property Details
            </h3>

            <Tabs defaultValue="property" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="property">Property</TabsTrigger>
                <TabsTrigger value="financing">Financing</TabsTrigger>
                <TabsTrigger value="expenses">Expenses</TabsTrigger>
              </TabsList>
              
              <TabsContent value="property" className="space-y-4 mt-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Property Value (₹)</label>
                  <Input
                    type="number"
                    value={calculatorData.propertyValue}
                    onChange={(e) => setCalculatorData({...calculatorData, propertyValue: Number(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Monthly Rent (₹)</label>
                  <Input
                    type="number"
                    value={calculatorData.monthlyRent}
                    onChange={(e) => setCalculatorData({...calculatorData, monthlyRent: Number(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Occupancy Rate (%)</label>
                  <Slider
                    value={[calculatorData.occupancyRate]}
                    onValueChange={(value) => setCalculatorData({...calculatorData, occupancyRate: value[0]})}
                    max={100}
                    min={70}
                    step={1}
                  />
                  <div className="text-sm text-gray-600 mt-1">{calculatorData.occupancyRate}%</div>
                </div>
              </TabsContent>
              
              <TabsContent value="financing" className="space-y-4 mt-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Down Payment (%)</label>
                  <Slider
                    value={[calculatorData.downPayment]}
                    onValueChange={(value) => setCalculatorData({...calculatorData, downPayment: value[0]})}
                    max={50}
                    min={10}
                    step={5}
                  />
                  <div className="text-sm text-gray-600 mt-1">{calculatorData.downPayment}%</div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Interest Rate (%)</label>
                  <Input
                    type="number"
                    step="0.1"
                    value={calculatorData.interestRate}
                    onChange={(e) => setCalculatorData({...calculatorData, interestRate: Number(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Term (years)</label>
                  <Select 
                    value={calculatorData.loanTerm.toString()} 
                    onValueChange={(value) => setCalculatorData({...calculatorData, loanTerm: Number(value)})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 years</SelectItem>
                      <SelectItem value="20">20 years</SelectItem>
                      <SelectItem value="25">25 years</SelectItem>
                      <SelectItem value="30">30 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>
              
              <TabsContent value="expenses" className="space-y-4 mt-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Property Tax (%)</label>
                  <Input
                    type="number"
                    step="0.1"
                    value={calculatorData.propertyTax}
                    onChange={(e) => setCalculatorData({...calculatorData, propertyTax: Number(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Insurance (%)</label>
                  <Input
                    type="number"
                    step="0.1"
                    value={calculatorData.insurance}
                    onChange={(e) => setCalculatorData({...calculatorData, insurance: Number(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Maintenance (%)</label>
                  <Input
                    type="number"
                    step="0.1"
                    value={calculatorData.maintenance}
                    onChange={(e) => setCalculatorData({...calculatorData, maintenance: Number(e.target.value)})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Management Fee (%)</label>
                  <Input
                    type="number"
                    step="0.1"
                    value={calculatorData.management}
                    onChange={(e) => setCalculatorData({...calculatorData, management: Number(e.target.value)})}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Key Metrics */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-[#0B3557]" />
                Investment Analysis
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#0B3557] text-white rounded-lg text-center">
                  <div className="text-2xl font-bold">{cashOnCash.toFixed(1)}%</div>
                  <div className="text-sm opacity-90">Cash-on-Cash Return</div>
                </div>
                <div className="p-4 bg-green-500 text-white rounded-lg text-center">
                  <div className="text-2xl font-bold">{capRate.toFixed(1)}%</div>
                  <div className="text-sm opacity-90">Cap Rate</div>
                </div>
                <div className="p-4 bg-blue-500 text-white rounded-lg text-center">
                  <div className="text-2xl font-bold">₹{Math.round(annualCashFlow).toLocaleString()}</div>
                  <div className="text-sm opacity-90">Annual Cash Flow</div>
                </div>
                <div className="p-4 bg-purple-500 text-white rounded-lg text-center">
                  <div className="text-2xl font-bold">₹{Math.round(netOperatingIncome).toLocaleString()}</div>
                  <div className="text-sm opacity-90">Net Operating Income</div>
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-6">Financial Breakdown</h4>
              
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Gross Annual Rent</span>
                  <span className="font-semibold">₹{Math.round(grossAnnualRent).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Total Expenses</span>
                  <span className="font-semibold text-red-600">-₹{Math.round(annualExpenses).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Loan Payment</span>
                  <span className="font-semibold text-red-600">-₹{Math.round(monthlyPayment * 12).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 font-semibold text-lg border-t-2">
                  <span>Net Cash Flow</span>
                  <span className={annualCashFlow >= 0 ? 'text-green-600' : 'text-red-600'}>
                    ₹{Math.round(annualCashFlow).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-[#0B3557] hover:bg-[#0B3557]/90" size="lg">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Email Analysis
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Investment Strategies Section
function InvestmentStrategies() {
  const strategies = [
    {
      icon: TrendingUp,
      title: "Buy & Hold",
      description: "Long-term wealth building through rental income and appreciation",
      pros: ["Steady cash flow", "Tax benefits", "Long-term appreciation", "Leverage"],
      cons: ["Property management", "Market risk", "Liquidity issues"],
      bestFor: "Conservative investors seeking steady returns",
      timeframe: "5+ years",
      riskLevel: "Low-Medium"
    },
    {
      icon: Zap,
      title: "Fix & Flip",
      description: "Short-term profits through property renovation and quick resale",
      pros: ["Quick profits", "Active involvement", "Market timing", "Higher returns"],
      cons: ["High risk", "Capital intensive", "Market dependent", "Time consuming"],
      bestFor: "Experienced investors with renovation skills",
      timeframe: "6-18 months",
      riskLevel: "High"
    },
    {
      icon: Building2,
      title: "REIT Investment",
      description: "Diversified real estate exposure through investment trusts",
      pros: ["High liquidity", "Professional management", "Diversification", "Low minimum"],
      cons: ["Market volatility", "No control", "Management fees", "Tax implications"],
      bestFor: "Passive investors seeking diversification",
      timeframe: "3+ years",
      riskLevel: "Medium"
    },
    {
      icon: Users,
      title: "Real Estate Syndication",
      description: "Pool resources with other investors for larger commercial deals",
      pros: ["Access to large deals", "Passive income", "Professional management", "Diversification"],
      cons: ["High minimums", "Less control", "Illiquid", "Manager risk"],
      bestFor: "Accredited investors with larger capital",
      timeframe: "5-10 years",
      riskLevel: "Medium-High"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Investment Strategies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the right investment approach based on your goals, timeline, and risk tolerance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0B3557] rounded-xl flex items-center justify-center">
                  <strategy.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{strategy.title}</h3>
                  <p className="text-sm text-gray-600">{strategy.description}</p>
                </div>
              </div>

              {/* Strategy Details */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Timeframe</div>
                  <div className="text-sm text-[#0B3557] font-semibold">{strategy.timeframe}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Risk Level</div>
                  <Badge variant="secondary" className="text-xs">
                    {strategy.riskLevel}
                  </Badge>
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="text-sm font-semibold text-green-700 mb-2">Pros</h5>
                  <ul className="space-y-1">
                    {strategy.pros.slice(0, 3).map((pro, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        <span className="text-gray-600">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-red-700 mb-2">Cons</h5>
                  <ul className="space-y-1">
                    {strategy.cons.slice(0, 3).map((con, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <AlertTriangle className="h-3 w-3 text-red-500" />
                        <span className="text-gray-600">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-medium text-gray-700 mb-2">Best For:</div>
                <p className="text-sm text-gray-600">{strategy.bestFor}</p>
              </div>

              <Button className="w-full bg-[#0B3557] hover:bg-[#0B3557]/90">
                Learn More
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Market Analysis Section
function MarketAnalysis() {
  const marketData = [
    {
      location: "Riyadh - KAFD",
      appreciation: "+12.8%",
      rentalYield: "7.2%",
      avgPrice: "₹3.2M",
      trend: "up",
      forecast: "Strong growth expected"
    },
    {
      location: "Jeddah - Corniche",
      appreciation: "+8.5%",
      rentalYield: "6.8%",
      avgPrice: "₹2.8M",
      trend: "up",
      forecast: "Steady appreciation"
    },
    {
      location: "Riyadh - Al Olaya",
      appreciation: "+10.2%",
      rentalYield: "6.5%",
      avgPrice: "₹2.5M",
      trend: "up",
      forecast: "High demand area"
    },
    {
      location: "Dammam - Business District",
      appreciation: "+6.3%",
      rentalYield: "8.1%",
      avgPrice: "₹2.1M",
      trend: "stable",
      forecast: "Emerging market"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Analysis</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-time market insights to help you make informed investment decisions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {marketData.map((market, index) => (
            <motion.div
              key={market.location}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{market.location}</h3>
                  <p className="text-sm text-gray-600">{market.forecast}</p>
                </div>
                <div className={`p-2 rounded-lg ${
                  market.trend === 'up' ? 'bg-green-100' : 'bg-yellow-100'
                }`}>
                  <TrendingUp className={`h-4 w-4 ${
                    market.trend === 'up' ? 'text-green-600' : 'text-yellow-600'
                  }`} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-semibold text-green-600">{market.appreciation}</div>
                  <div className="text-xs text-gray-600">Appreciation</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-semibold text-blue-600">{market.rentalYield}</div>
                  <div className="text-xs text-gray-600">Rental Yield</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-semibold text-[#0B3557]">{market.avgPrice}</div>
                  <div className="text-xs text-gray-600">Avg. Price</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Insights */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <LineChart className="h-6 w-6 text-[#0B3557]" />
            Key Market Insights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">+9.8%</div>
              <div className="text-sm text-gray-700">Average Market Growth</div>
              <div className="text-xs text-gray-600 mt-2">YoY across all sectors</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">7.1%</div>
              <div className="text-sm text-gray-700">Average Rental Yield</div>
              <div className="text-xs text-gray-600 mt-2">Across prime locations</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">28 days</div>
              <div className="text-sm text-gray-700">Average Sale Time</div>
              <div className="text-xs text-gray-600 mt-2">For investment properties</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Investment CTA Section
function InvestmentCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B3557] to-[#2d5f7f]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get personalized investment recommendations and connect with our expert team to build your real estate portfolio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-[#bb9a74] hover:bg-[#bb9a74]/90 text-white">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0B3557]">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +966 11 123 4567
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
              <p className="text-white/80 text-sm">Professional investment advisors with 10+ years experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Investments</h3>
              <p className="text-white/80 text-sm">Thoroughly vetted properties with guaranteed returns</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
              <p className="text-white/80 text-sm">Average 8.5% ROI across our investment portfolio</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Investment Page Component
export default function InvestmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <InvestmentHero />
      <InvestmentTypes />
      <FeaturedInvestmentProperties />
      <AdvancedCalculator />
      <InvestmentStrategies />
      <MarketAnalysis />
      <InvestmentCTA />
    </div>
  );
}