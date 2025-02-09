"use client";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Area, AreaChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DollarSign,
  ShoppingCart,
  CheckCircle,
  Users,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const chartConfigs = {
  totalSales: {
    label: "Total Sales",
    color: "#4CAF50",
    icon: <DollarSign />,
  },
  totalIncome: {
    label: "Total Income",
    color: "#FF9800",
    icon: <ShoppingCart />,
  },
  ordersPaid: {
    label: "Orders Paid",
    color: "#2196F3",
    icon: <CheckCircle />,
  },
  totalVisitors: {
    label: "Total Visitors",
    color: "#9C27B0",
    icon: <Users />,
  },
};

const chartData = {
  totalSales: [
    { month: "Jan", value: 5000 },
    { month: "Feb", value: 7000 },
    { month: "Mar", value: 6000 },
    { month: "Apr", value: 7500 },
    { month: "May", value: 8200 },
    { month: "Jun", value: 9100 },
  ],
  totalIncome: [
    { month: "Jan", value: 10000 },
    { month: "Feb", value: 15000 },
    { month: "Mar", value: 12000 },
    { month: "Apr", value: 17000 },
    { month: "May", value: 18000 },
    { month: "Jun", value: 21000 },
  ],
  ordersPaid: [
    { month: "Jan", value: 200 },
    { month: "Feb", value: 300 },
    { month: "Mar", value: 250 },
    { month: "Apr", value: 400 },
    { month: "May", value: 500 },
    { month: "Jun", value: 450 },
  ],
  totalVisitors: [
    { month: "Jan", value: 8000 },
    { month: "Feb", value: 12000 },
    { month: "Mar", value: 10000 },
    { month: "Apr", value: 15000 },
    { month: "May", value: 18000 },
    { month: "Jun", value: 20000 },
  ],
};

// **Calculate Totals**
const totalStats = {
  totalSales: chartData.totalSales.reduce((acc, data) => acc + data.value, 0),
  totalIncome: chartData.totalIncome.reduce((acc, data) => acc + data.value, 0),
  ordersPaid: chartData.ordersPaid.reduce((acc, data) => acc + data.value, 0),
  totalVisitors: chartData.totalVisitors.reduce(
    (acc, data) => acc + data.value,
    0
  ),
};

// **1st Card: Recent Orders (Area Chart)**
const recentOrdersData = [
  { month: "January", orders: 186 },
  { month: "February", orders: 305 },
  { month: "March", orders: 237 },
  { month: "April", orders: 73 },
  { month: "May", orders: 209 },
  { month: "June", orders: 214 },
  { month: "July", orders: 340 },
  { month: "August", orders: 450 },
  { month: "September", orders: 398 },
  { month: "October", orders: 420 },
  { month: "November", orders: 480 },
  { month: "December", orders: 520 },
];
const chartConfig = {
  orders: { label: "Orders", color: "#4CAF50" },
};
// **2nd Card: Top Products**
const topProducts = [
  {
    id: 1,
    name: "MacBook Pro 16",
    image: "/images/macbook.jpg",
    coupon: "DISCOUNT20",
    country: "🇺🇸",
    sales: "$25,000",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    image: "/images/iphone.jpg",
    coupon: "NEWYEAR15",
    country: "🇬🇧",
    sales: "$18,500",
  },
  {
    id: 3,
    name: "Sony Headphones",
    image: "/images/headphones.jpg",
    coupon: "SUMMER10",
    country: "🇨🇦",
    sales: "$12,300",
  },
  {
    id: 4,
    name: "MacBook Pro 16",
    image: "/images/macbook.jpg",
    coupon: "DISCOUNT20",
    country: "🇺🇸",
    sales: "$25,000",
  },
  {
    id: 5,
    name: "iPhone 15 Pro",
    image: "/images/iphone.jpg",
    coupon: "NEWYEAR15",
    country: "🇬🇧",
    sales: "$18,500",
  },
];
// **3rd Card: Top Countries by Sales**
const topCountries = [
  { country: "🇺🇸 USA", sales: 120000 },
  { country: "🇩🇪 Germany", sales: 65000 },
  { country: "🇨🇦 Canada", sales: 80500 },
  { country: "🇬🇧 UK", sales: 95000 },
  { country: "🇦🇺 Australia", sales: 70200 },
];

// Section 3

const topShops = [
  {
    name: "Robert",
    purchases: 73,
    categories: "Kitchen, Pets",
    total: "$1,000",
    status: "100%",
  },
  {
    name: "Calvin",
    purchases: 66,
    categories: "Health, Grocery",
    total: "$4,000",
    status: "100%",
  },
  {
    name: "Dwight",
    purchases: 15_890,
    categories: "Electronics",
    total: "$2,700",
    status: "100%",
  },
  {
    name: "Cody",
    purchases: 15,
    categories: "Movies, Music",
    total: "$2,100",
    status: "100%",
  },
];

const productOverview = [
  {
    name: "Soft Fluffy Cats",
    id: "#327",
    price: "$11.70",
    quantity: 28,
    sale: "On sale",
    revenue: "$328.85",
    status: "Not Available",
  },
  {
    name: "Taste of the Wild Formula Finder",
    id: "#380",
    price: "$8.99",
    quantity: 10,
    sale: "On sale",
    revenue: "$105.55",
    status: "Not Available",
  },
  {
    name: "Wellness Natural Food",
    id: "#126",
    price: "$5.22",
    quantity: 578,
    sale: "--/--",
    revenue: "$202.87",
    status: "Not Available",
  },
  {
    name: "Dog Food Rachael Ray",
    id: "#582",
    price: "$14.81",
    quantity: 36,
    sale: "--/--",
    revenue: "$475.22",
    status: "Available",
  },
  {
    name: "Best Buddy Bits Dog Treats",
    id: "#293",
    price: "$6.48",
    quantity: 84,
    sale: "--/--",
    revenue: "$219.78",
    status: "Not Available",
  },
  {
    name: "Dog Food Rachael Ray",
    id: "#582",
    price: "$14.81",
    quantity: 36,
    sale: "--/--",
    revenue: "$475.22",
    status: "Available",
  },
  {
    name: "Dog Food Rachael Ray",
    id: "#582",
    price: "$14.81",
    quantity: 36,
    sale: "--/--",
    revenue: "$475.22",
    status: "Available",
  },
];

const Report = () => {
  return (
    <div className="w-full px-6 pt-6 bg-transparent text-foreground">
      {/* Stats with Graphs */}
      {/* Section Card One  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(totalStats).map(([key, value]) => (
          <div key={key} className="bg-background p-4 rounded-lg shadow-md">
            {/* Icon & Total Value */}
            <div className="flex items-center gap-4">
              <div className="text-3xl text-white border p-2 rounded-xl bg-accent">
                {chartConfigs[key].icon}
              </div>
              <div>
                <p className="text-sm font-light text-foreground/50">
                  {chartConfigs[key].label}
                </p>
                <p className="text-2xl font-semibold text-foreground">
                  ${value.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Chart Below */}
            <ChartContainer
              config={chartConfigs[key]}
              className="min-h-[200px] w-full mt-4"
            >
              <BarChart data={chartData[key]}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  stroke="white"
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar
                  dataKey="value"
                  fill={chartConfigs[key].color}
                  radius={4}
                />
              </BarChart>
            </ChartContainer>
          </div>
        ))}
      </div>

      {/* Here Come Another Section */}
      {/* Section Card two  */}
      <div className="grid my-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* 📌 1st Card - Recent Orders (Area Chart) */}
        <Card className="bg-background text-foreground w-full">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Last 12 months of order data</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                data={recentOrdersData}
                margin={{ left: 12, right: 12 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  stroke="white"
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="orders"
                  type="natural"
                  fill="var(--color-orders)"
                  fillOpacity={0.4}
                  stroke="var(--color-orders)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 5.2% this month{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  January - December 2024
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
        {/* 📌 2nd Card - Top Products */}
        <Card className="bg-background text-foreground w-full">
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Best-selling products</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between w-full gap-4 py-2 px-3 hover:bg-foreground/5 hover:translate-x-1 cursor-pointer rounded-lg"
              >
                {/* Product Details */}
                <div className="flex items-center gap-4 w-1/2 min-w-[140px] max-w-[200px] overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="w-8 h-8 rounded-full bg-accent shrink-0"></div>
                  <p className="font-semibold truncate">{product.name}</p>
                </div>

                {/* Coupon */}
                <p className="text-xs text-muted-foreground w-1/3 text-center truncate">
                  Coupon: <span className="text-accent">{product.coupon}</span>
                </p>

                {/* Country & Sales */}
                <p className="text-sm w-1/3 text-right flex justify-end gap-2 truncate">
                  <span className="text-accent font-semibold">
                    {product.country}
                  </span>
                  <span className="text-foreground font-medium">
                    {product.sales}
                  </span>
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
        {/* 📌 3rd Card - Top Countries by Sales */}
        <Card className="bg-background text-foreground w-full">
          <CardHeader>
            <CardTitle>Top Countries by Sales</CardTitle>
            <CardDescription>Countries with the highest sales</CardDescription>
          </CardHeader>
          <CardContent>
            {topCountries.map((country, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-foreground/10 py-2"
              >
                {/* Country Name */}
                <p className="text-lg w-1/2 text-accent truncate">
                  {country.country}
                </p>

                <div className="w-1/4 flex justify-center items-center">
                  {country.sales >= 90000 ? (
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-500" />
                  )}
                </div>

                {/* Sales */}
                <p className="text-foreground text-lg font-semibold">
                  ${country.sales}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Here Come Another Section */}
      {/* Section Card two  */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 mb-20  xl:grid-cols-3 gap-6">
        {/* 📌 1st Card - Best Shop Sellers */}
        <Card className="bg-background text-foreground w-full p-0">
          <CardHeader>
            <CardTitle>
              {topShops.length > 0
                ? "Best Shop Sellers"
                : "No Shop Data Available"}
            </CardTitle>
            <CardDescription>
              {topShops.length > 0
                ? "Top-performing shops based on sales"
                : "No data to display"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/* Table Header */}
            <div className="grid grid-cols-2 md:grid-cols-4 w-full text-lg text-center font-semibold pb-4 ">
              <p>Shop</p>
              <p>Categories</p>
              <p>Total</p>
              <p>Status</p>
            </div>

            {/* Table Data */}
            {topShops.map((shop, index) => (
              <div
                key={index}
                className="grid grid-cols-2 md:grid-cols-4 w-full items-center py-4 text-sm  gap-8"
              >
                {/* Shop Name & Purchases */}
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-accent shrink-0"></div>
                  <div className="flex flex-col">
                    <p className="font-semibold">{shop.name}</p>
                    <p className="text-muted-foreground text-xs flex gap-1">
                      {shop.purchases} Purchases
                    </p>
                  </div>
                </div>

                {/* Categories */}
                <p className="text-muted-foreground text-center break-words">
                  {shop.categories}
                </p>

                {/* Total */}
                <p className="font-semibold text-center">{shop.total}</p>

                {/* Status with Progress Bar */}
                <div className="flex flex-col items-center md:items-end gap-1 w-full">
                  <p
                    className={`font-semibold ${
                      shop.status === "100%" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {shop.status}
                  </p>
                  <div className="w-full bg-foreground/10 rounded-full h-2">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: `${parseInt(shop.status)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 📌 2nd Card - Product Overview (Takes 2 Columns) */}
        <Card className="bg-background text-foreground w-full xl:col-span-2">
          <CardHeader>
            <CardTitle>Product Overview</CardTitle>
            <CardDescription>Recent product performance</CardDescription>
          </CardHeader>

          <CardContent>
            {/* Table Header */}
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr] text-lg font-semibold pb-4 px-4">
              <p className="text-left">Name</p>
              <p className="text-center">Product ID</p>
              <p className="text-center">Price</p>
              <p className="text-center">Quantity</p>
              <p className="text-center">Sale</p>
              <p className="text-center">Revenue</p>
              <p className="text-center">Status</p>
            </div>

            {/* Table Data */}
            {productOverview.map((product, index) => (
              <div
                key={index}
                className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr]    items-center py-4 text-sm px-4"
              >
                <p className="font-semibold text-left">{product.name}</p>
                <p className="text-muted-foreground text-center">
                  {product.id}
                </p>
                <p className="text-center">{product.price}</p>
                <p className="text-center">{product.quantity}</p>
                <p className="text-accent text-center">{product.sale}</p>
                <p className="font-semibold text-center">{product.revenue}</p>
                <p
                  className={`font-semibold text-center ${
                    product.status === "Available"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {product.status}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Report;
