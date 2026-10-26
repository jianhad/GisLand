export default {
  福田区: { population: 155, gdp: "6100亿", area: "78.66平方公里" },
  南山区: { population: 181, gdp: "8800亿", area: "187.5平方公里" },
  罗湖区: { population: 102, gdp: "2800亿", area: "78.75平方公里" },
  宝安区: { population: 447, gdp: "5300亿", area: "396.6平方公里" },
  龙岗区: { population: 407, gdp: "4900亿", area: "388.2平方公里" },
  盐田区: { population: 21, gdp: "850亿", area: "74.7平方公里" },
  龙华区: { population: 252, gdp: "3000亿", area: "175.6平方公里" },
  坪山区: { population: 56, gdp: "1250亿", area: "166平方公里" },
  光明区: { population: 115, gdp: "1550亿", area: "156.1平方公里" },
} satisfies Record<string, { population: number; gdp: string; area: string }>;
