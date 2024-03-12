export default function createInt8TypedArray(length, position, value) {
  if (position < 0 >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const d1 = new Int8Array(buffer);
  d1[position] = value;
  return new DataView(buffer);
}
