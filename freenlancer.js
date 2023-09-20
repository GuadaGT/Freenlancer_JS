export function dayRate(ratePerHour) 
{
  return ratePerHour * 8;
}
export function daysInBudget(budget, ratePerHour) 
{
  return Math.floor(budget / (ratePerHour * 8));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) 
{
  const billableDaysPerMonth = 22;
  const fullMonths = Math.floor(numDays / billableDaysPerMonth);
  const remainingDays = numDays % billableDaysPerMonth;

  const monthlyRate = ratePerHour * billableDaysPerMonth * 8;
  const discountedRate = monthlyRate * (1 - discount);
  
  const totalCost = Math.ceil(fullMonths * discountedRate + remainingDays * ratePerHour * 8);

  return totalCost;
}