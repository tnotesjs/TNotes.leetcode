interface String {
  replicate(times: number): string;
}

String.prototype.replicate = function (times): string {
  if (times === 0) return ''
  if (times === 1) return this

  let half = Math.floor(times / 2)
  let halfReplicated = this.replicate(half)

  return halfReplicated + halfReplicated + (times % 2 === 0 ? '' : this)
}