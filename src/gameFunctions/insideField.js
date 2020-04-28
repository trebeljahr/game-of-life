export default function insideField(edge, value) {
  if (value >= edge || value < 0) {
    return false;
  } else {
    return true;
  }
}
