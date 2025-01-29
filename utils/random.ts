export function randomNumber(maxLength) {
  maxLength = Math.min(Math.max(maxLength, 1), 10);

  const randomNumber = Math.floor(Math.random() * Math.pow(10, maxLength));

  const paddedNumber = randomNumber.toString().padStart(maxLength, '0');

  return paddedNumber;
}
