const MAX_DISCOUNT_PCT = 100;

export function total(items, discountPct = 0) {
  if (discountPct < 0 || discountPct > MAX_DISCOUNT_PCT)
    throw new RangeError(`discount must be 0-${MAX_DISCOUNT_PCT}`);

  const sum = items.reduce((n, { price, qty = 1 }) => n + price * qty, 0);
  return Math.round(sum * (MAX_DISCOUNT_PCT - discountPct)) / 100;
}
