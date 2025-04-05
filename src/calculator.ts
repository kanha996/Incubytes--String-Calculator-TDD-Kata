export function add(numbers: string): number {
    if (numbers === "") return 0;
  
    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const match = numbers.match(/^\/\/(.)\n(.*)/);
      if (match) {
        delimiter = new RegExp(match[1]);
        numbers = match[2];
      }
    }
  
    const nums = numbers.split(delimiter).map(n => parseInt(n));
    const negatives = nums.filter(n => n < 0);
    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }
  
    return nums.reduce((sum, n) => sum + n, 0);
    
  }
  