type Props = {
  theme: 'light' | 'dark',
};

const Logo = ({ theme }: Props) => {
  const fill = theme === 'dark' ? '#222630' : '#fff';

  return (
    <svg viewBox="0 0 421 190" className="fl-svgdocument" x="0" y="0" style={{overflow: 'visible'}}><path textAnchor="middle" fontSize="100" letterSpacing="0" offset="0.5" dx="0" dy="0"  href="" fontFamily="Lilita One" font-scale="contain" transform="matrix(0.7390300631523132, 0, 0, 0.7390300631523132, 208.73904418945312, 173.1826629638672)" x="0" y="0" fill={fill}  d="M-285.8 0L-285.8-50.5Q-282.6-51.3 -277.35-52.2Q-272.1-53.1 -265.2-53.1L-265.2-53.1Q-260.2-53.1 -256.8-51.75Q-253.4-50.4 -251.10000000000002-47.8L-251.10000000000002-47.8Q-250.4-48.3 -248.9-49.2Q-247.4-50.1 -245.20000000000002-50.95Q-243-51.8 -240.3-52.45Q-237.60000000000002-53.1 -234.5-53.1L-234.5-53.1Q-228.5-53.1 -224.70000000000002-51.35Q-220.9-49.6 -218.75-46.4Q-216.60000000000002-43.2 -215.85000000000002-38.8Q-215.10000000000002-34.4 -215.10000000000002-29.2L-215.10000000000002-29.2L-215.10000000000002 0L-224.4 0L-224.4-27.2Q-224.4-31.8 -224.85000000000002-35.1Q-225.3-38.4 -226.55-40.6Q-227.8-42.8 -229.95000000000002-43.85Q-232.10000000000002-44.9 -235.5-44.9L-235.5-44.9Q-240.20000000000002-44.9 -243.25-43.65Q-246.3-42.4 -247.4-41.4L-247.4-41.4Q-246.60000000000002-38.8 -246.20000000000002-35.7Q-245.8-32.6 -245.8-29.2L-245.8-29.2L-245.8 0L-255.10000000000002 0L-255.10000000000002-27.2Q-255.10000000000002-31.8 -255.60000000000002-35.1Q-256.1-38.4 -257.35-40.6Q-258.6-42.8 -260.75-43.85Q-262.90000000000003-44.9 -266.2-44.9L-266.2-44.9Q-267.6-44.9 -269.2-44.8Q-270.8-44.7 -272.25-44.55Q-273.7-44.4 -274.90000000000003-44.2Q-276.1-44 -276.5-43.9L-276.5-43.9L-276.5 0L-285.8 0ZM-199.7 0L-199.7-50.5Q-196.5-51.3 -191.25-52.2Q-186-53.1 -179.1-53.1L-179.1-53.1Q-174.1-53.1 -170.7-51.75Q-167.29999999999998-50.4 -165-47.8L-165-47.8Q-164.29999999999998-48.3 -162.79999999999998-49.2Q-161.29999999999998-50.1 -159.1-50.95Q-156.89999999999998-51.8 -154.2-52.45Q-151.5-53.1 -148.39999999999998-53.1L-148.39999999999998-53.1Q-142.39999999999998-53.1 -138.6-51.35Q-134.79999999999998-49.6 -132.64999999999998-46.4Q-130.5-43.2 -129.75-38.8Q-129-34.4 -129-29.2L-129-29.2L-129 0L-138.29999999999998 0L-138.29999999999998-27.2Q-138.29999999999998-31.8 -138.75-35.1Q-139.2-38.4 -140.45-40.6Q-141.7-42.8 -143.85-43.85Q-146-44.9 -149.39999999999998-44.9L-149.39999999999998-44.9Q-154.1-44.9 -157.14999999999998-43.65Q-160.2-42.4 -161.29999999999998-41.4L-161.29999999999998-41.4Q-160.5-38.8 -160.1-35.7Q-159.7-32.6 -159.7-29.2L-159.7-29.2L-159.7 0L-169 0L-169-27.2Q-169-31.8 -169.5-35.1Q-170-38.4 -171.25-40.6Q-172.5-42.8 -174.64999999999998-43.85Q-176.79999999999998-44.9 -180.1-44.9L-180.1-44.9Q-181.5-44.9 -183.1-44.8Q-184.7-44.7 -186.14999999999998-44.55Q-187.6-44.4 -188.79999999999998-44.2Q-190-44 -190.39999999999998-43.9L-190.39999999999998-43.9L-190.39999999999998 0L-199.7 0ZM-67.69999999999999-26L-67.69999999999999-26Q-67.69999999999999-19.8 -69.49999999999997-14.8Q-71.29999999999998-9.8 -74.54999999999998-6.2Q-77.79999999999998-2.6 -82.29999999999998-0.65Q-86.79999999999998 1.3 -92.09999999999998 1.3L-92.09999999999998 1.3Q-97.39999999999998 1.3 -101.89999999999998-0.65Q-106.39999999999998-2.6 -109.64999999999998-6.2Q-112.89999999999998-9.8 -114.69999999999997-14.8Q-116.49999999999999-19.8 -116.49999999999999-26L-116.49999999999999-26Q-116.49999999999999-32.1 -114.69999999999997-37.15Q-112.89999999999998-42.2 -109.64999999999998-45.8Q-106.39999999999998-49.4 -101.89999999999998-51.35Q-97.39999999999998-53.3 -92.09999999999998-53.3L-92.09999999999998-53.3Q-86.79999999999998-53.3 -82.29999999999998-51.35Q-77.79999999999998-49.4 -74.54999999999998-45.8Q-71.29999999999998-42.2 -69.49999999999997-37.15Q-67.69999999999999-32.1 -67.69999999999999-26ZM-77.39999999999998-26L-77.39999999999998-26Q-77.39999999999998-34.8 -81.34999999999998-39.95Q-85.29999999999998-45.1 -92.09999999999998-45.1L-92.09999999999998-45.1Q-98.89999999999998-45.1 -102.84999999999998-39.95Q-106.79999999999998-34.8 -106.79999999999998-26L-106.79999999999998-26Q-106.79999999999998-17.2 -102.84999999999998-12.05Q-98.89999999999998-6.9 -92.09999999999998-6.9L-92.09999999999998-6.9Q-85.29999999999998-6.9 -81.34999999999998-12.05Q-77.39999999999998-17.2 -77.39999999999998-26ZM-35.39999999999998-53.1L-35.39999999999998-53.1Q-34.19999999999998-53.1 -32.64999999999998-52.95Q-31.09999999999998-52.8 -29.59999999999998-52.55Q-28.09999999999998-52.3 -26.84999999999998-52.05Q-25.59999999999998-51.8 -24.99999999999998-51.6L-24.99999999999998-51.6L-26.59999999999998-43.5Q-27.69999999999998-43.9 -30.24999999999998-44.45Q-32.79999999999998-45 -36.79999999999998-45L-36.79999999999998-45Q-39.39999999999998-45 -41.94999999999998-44.45Q-44.49999999999998-43.9 -45.29999999999998-43.7L-45.29999999999998-43.7L-45.29999999999998 0L-54.59999999999998 0L-54.59999999999998-49.8Q-51.29999999999998-51 -46.39999999999998-52.05Q-41.49999999999998-53.1 -35.39999999999998-53.1ZM 20.100000000000023-25.9L 20.100000000000023-25.9Q 20.100000000000023-35  15.600000000000023-39.9Q 11.100000000000023-44.8  3.6000000000000227-44.8L 3.6000000000000227-44.8Q-0.5999999999999801-44.8 -2.949999999999978-44.5Q-5.299999999999979-44.2 -6.699999999999978-43.8L-6.699999999999978-43.8L-6.699999999999978-11Q-4.999999999999979-9.6 -1.7999999999999794-8.3Q 1.40000000000002-7  5.200000000000021-7L 5.200000000000021-7Q 9.200000000000024-7  12.050000000000018-8.45Q 14.90000000000002-9.9  16.700000000000024-12.45Q 18.50000000000002-15  19.30000000000002-18.45Q 20.100000000000023-21.9  20.100000000000023-25.9ZM 29.80000000000002-25.9L 29.80000000000002-25.9Q 29.80000000000002-20  28.25000000000002-15Q 26.700000000000024-10  23.700000000000024-6.4Q 20.700000000000024-2.8  16.350000000000023-0.8Q 12.000000000000021 1.2  6.40000000000002 1.2L 6.40000000000002 1.2Q 1.90000000000002 1.2 -1.5499999999999794 0Q-4.999999999999979-1.2 -6.699999999999978-2.3L-6.699999999999978-2.3L-6.699999999999978 18.5L-15.999999999999979 18.5L-15.999999999999979-50.4Q-12.699999999999978-51.2 -7.749999999999979-52.15Q-2.7999999999999794-53.1  3.7000000000000206-53.1L 3.7000000000000206-53.1Q 9.700000000000024-53.1  14.500000000000021-51.2Q 19.30000000000002-49.3  22.700000000000024-45.8Q 26.100000000000023-42.3  27.950000000000024-37.25Q 29.80000000000002-32.2  29.80000000000002-25.9ZM 75.50000000000003-3L 75.50000000000003-5.2Q 74.30000000000001-4.4  70.85000000000002-3.15Q 67.40000000000002-1.9  62.80000000000002-1.9L 62.80000000000002-1.9Q 58.10000000000002-1.9  53.95000000000002-3.4Q 49.80000000000002-4.9  46.70000000000002-8.05Q 43.60000000000002-11.2  41.80000000000002-15.9Q 40.00000000000002-20.6  40.00000000000002-27.1L 40.00000000000002-27.1Q 40.00000000000002-32.8  41.70000000000002-37.55Q 43.40000000000002-42.3  46.65000000000002-45.75Q 49.90000000000002-49.2  54.60000000000002-51.15Q 59.30000000000002-53.1  65.20000000000002-53.1L 65.20000000000002-53.1Q 71.70000000000002-53.1  76.55000000000001-52.15Q 81.40000000000002-51.2  84.70000000000002-50.4L 84.70000000000002-50.4L 84.70000000000002-4Q 84.70000000000002 8  78.50000000000003 13.4Q 72.30000000000001 18.8  59.70000000000002 18.8L 59.70000000000002 18.8Q 54.80000000000002 18.8  50.45000000000002 18Q 46.10000000000002 17.2  42.90000000000002 16.1L 42.90000000000002 16.1L 44.60000000000002 8Q 47.40000000000002 9.1  51.45000000000002 9.95Q 55.50000000000002 10.8  59.90000000000002 10.8L 59.90000000000002 10.8Q 68.20000000000002 10.8  71.85000000000002 7.5Q 75.50000000000003 4.2  75.50000000000003-3L 75.50000000000003-3ZM 75.40000000000002-13.4L 75.40000000000002-43.8Q 74.00000000000003-44.2  71.65000000000002-44.55Q 69.30000000000001-44.9  65.30000000000001-44.9L 65.30000000000001-44.9Q 57.80000000000002-44.9  53.75000000000002-40Q 49.70000000000002-35.1  49.70000000000002-27L 49.70000000000002-27Q 49.70000000000002-22.5  50.85000000000002-19.3Q 52.00000000000002-16.1  53.95000000000002-14Q 55.90000000000002-11.9  58.45000000000002-10.9Q 61.00000000000002-9.9  63.70000000000002-9.9L 63.70000000000002-9.9Q 67.40000000000002-9.9  70.50000000000003-10.95Q 73.60000000000002-12  75.40000000000002-13.4L 75.40000000000002-13.4ZM 95.30000000000003-25.6L 95.30000000000003-34.3L 120.00000000000003-34.3L 120.00000000000003-25.6L 95.30000000000003-25.6ZM 153.20000000000002 1.2L 153.20000000000002 1.2Q 146.90000000000003 1.2  142.15000000000003-0.8Q 137.40000000000003-2.8  134.15000000000003-6.4Q 130.90000000000003-10  129.3-14.95Q 127.70000000000002-19.9  127.70000000000002-25.9L 127.70000000000002-25.9Q 127.70000000000002-31.9  129.45000000000002-36.9Q 131.20000000000002-41.9  134.40000000000003-45.55Q 137.60000000000002-49.2  142.25000000000003-51.25Q 146.90000000000003-53.3  152.60000000000002-53.3L 152.60000000000002-53.3Q 156.10000000000002-53.3  159.60000000000002-52.7Q 163.10000000000002-52.1  166.3-50.8L 166.3-50.8L 164.20000000000002-42.9Q 162.10000000000002-43.9  159.35000000000002-44.5Q 156.60000000000002-45.1  153.50000000000003-45.1L 153.50000000000003-45.1Q 145.70000000000002-45.1  141.55-40.2Q 137.40000000000003-35.3  137.40000000000003-25.9L 137.40000000000003-25.9Q 137.40000000000003-21.7  138.35000000000002-18.2Q 139.3-14.7  141.35000000000002-12.2Q 143.40000000000003-9.7  146.60000000000002-8.35Q 149.8-7  154.40000000000003-7L 154.40000000000003-7Q 158.10000000000002-7  161.10000000000002-7.7Q 164.10000000000002-8.4  165.8-9.2L 165.8-9.2L 167.10000000000002-1.4Q 166.3-0.9  164.8-0.45Q 163.3 0  161.40000000000003 0.35Q 159.50000000000003 0.7  157.35000000000002 0.95Q 155.20000000000002 1.2  153.20000000000002 1.2ZM 196.3-53.1L 196.3-53.1Q 197.50000000000003-53.1  199.05-52.95Q 200.60000000000002-52.8  202.10000000000002-52.55Q 203.60000000000002-52.3  204.85000000000002-52.05Q 206.10000000000002-51.8  206.70000000000002-51.6L 206.70000000000002-51.6L 205.10000000000002-43.5Q 204.00000000000003-43.9  201.45000000000002-44.45Q 198.90000000000003-45  194.90000000000003-45L 194.90000000000003-45Q 192.3-45  189.75000000000003-44.45Q 187.20000000000002-43.9  186.40000000000003-43.7L 186.40000000000003-43.7L 186.40000000000003 0L 177.10000000000002 0L 177.10000000000002-49.8Q 180.40000000000003-51  185.3-52.05Q 190.20000000000002-53.1  196.3-53.1ZM 215.70000000000002 0L 215.70000000000002-50.5Q 218.9-51.3  224.15-52.2Q 229.4-53.1  236.3-53.1L 236.3-53.1Q 241.3-53.1  244.70000000000002-51.75Q 248.10000000000002-50.4  250.40000000000003-47.8L 250.40000000000003-47.8Q 251.10000000000002-48.3  252.60000000000002-49.2Q 254.10000000000002-50.1  256.3-50.95Q 258.5-51.8  261.20000000000005-52.45Q 263.90000000000003-53.1  267-53.1L 267-53.1Q 273-53.1  276.8-51.35Q 280.6-49.6  282.75-46.4Q 284.90000000000003-43.2  285.65000000000003-38.8Q 286.40000000000003-34.4  286.40000000000003-29.2L 286.40000000000003-29.2L 286.40000000000003 0L 277.1 0L 277.1-27.2Q 277.1-31.8  276.65000000000003-35.1Q 276.20000000000005-38.4  274.95000000000005-40.6Q 273.70000000000005-42.8  271.55-43.85Q 269.40000000000003-44.9  266-44.9L 266-44.9Q 261.3-44.9  258.25-43.65Q 255.20000000000002-42.4  254.10000000000002-41.4L 254.10000000000002-41.4Q 254.90000000000003-38.8  255.3-35.7Q 255.70000000000002-32.6  255.70000000000002-29.2L 255.70000000000002-29.2L 255.70000000000002 0L 246.40000000000003 0L 246.40000000000003-27.2Q 246.40000000000003-31.8  245.90000000000003-35.1Q 245.40000000000003-38.4  244.15000000000003-40.6Q 242.90000000000003-42.8  240.75-43.85Q 238.60000000000002-44.9  235.3-44.9L 235.3-44.9Q 233.9-44.9  232.3-44.8Q 230.70000000000002-44.7  229.25000000000003-44.55Q 227.8-44.4  226.60000000000002-44.2Q 225.4-44  225.00000000000003-43.9L 225.00000000000003-43.9L 225.00000000000003 0L 215.70000000000002 0Z"></path><path id="_mBX__mh0zoyEiQ_yAVsr2" d="M133.371,106.913c7.43,0,13.475-6.034,13.475-13.451s-6.045-13.451-13.475-13.451c-7.432,0-13.477,6.034-13.477,13.451   S125.939,106.913,133.371,106.913z M133.371,88.011c3.02,0,5.475,2.445,5.475,5.451s-2.455,5.451-5.475,5.451   s-5.477-2.445-5.477-5.451S130.352,88.011,133.371,88.011z" stroke="none" fill="#c93434" transform="matrix(0.9558780789375305, 0, 0, 0.9558780789375305, 114.48271796127301, -47.325978647544616)"></path><path id="_xWDLnvc_gwjeZp4ZdmT1J" d="M67.518,106.913c2.209,0,4-1.791,4-4v-5.451h5.451c2.209,0,4-1.791,4-4s-1.791-4-4-4h-5.451v-5.451c0-2.209-1.791-4-4-4   s-4,1.791-4,4v5.451h-5.451c-2.209,0-4,1.791-4,4s1.791,4,4,4h5.451v5.451C63.518,105.122,65.309,106.913,67.518,106.913z" stroke="none" fill="#34c972" transform="matrix(0.9558780789375305, 0, 0, 0.9558780789375305, 114.31609198471051, -47.325978647544616)"></path><g id="_4ZzgsYQZr4bvKMO1WkQs8" transform="matrix(0.6608273983001709, 0, 0, 0.6608273983001709, 41.78433081527692, -47.56899012215399)"><path id="_rdmd1rRy1fuR4zHagtV1Q" d="M106.717,112.697H91.283c-8.525,0-16.039,5.154-19.143,13.132l-4.645,11.938c-1.15,2.961-3.932,4.873-7.084,4.873h-8.764   c-4.217,0-7.648-3.508-7.648-7.817V72.975c0-4.311,3.432-7.817,7.648-7.817h13.375c1.281,0,2.555,0.422,3.584,1.188l8.99,6.694   c1.771,1.319,4.277,0.952,5.598-0.819c1.318-1.771,0.951-4.277-0.82-5.597l-8.99-6.695c-2.4-1.786-5.371-2.771-8.361-2.771H51.648   C43.02,57.157,36,64.253,36,72.975v61.849c0,8.722,7.02,15.817,15.648,15.817h8.764c6.479,0,12.186-3.916,14.541-9.973   l4.645-11.938c1.896-4.88,6.484-8.032,11.686-8.032h15.434c2.209,0,4-1.791,4-4S108.926,112.697,106.717,112.697z" stroke="none" fill={fill} transform="matrix(1.4464868307113647, 0, 0, 1.4464868307113647, 109.8561782836914, -0.568669855594635)"></path><path d="M148.354,57.157h-13.377c-2.99,0-5.961,0.984-8.361,2.771l-6.33,4.714c-1.029,0.767-2.303,1.188-3.584,1.188H104V53.359   c0-2.209-1.791-4-4-4s-4,1.791-4,4v16.472c0,2.209,1.791,4,4,4h16.701c2.99,0,5.961-0.984,8.361-2.771l6.33-4.714   c1.029-0.767,2.303-1.188,3.584-1.188h13.377c4.217,0,7.646,3.507,7.646,7.817v61.849c0,4.31-3.43,7.817-7.646,7.817h-8.766   c-3.152,0-5.934-1.912-7.084-4.875l-4.645-11.937c-0.803-2.059-3.121-3.076-5.18-2.277c-2.059,0.801-3.078,3.119-2.277,5.178   l4.645,11.937c2.355,6.059,8.063,9.975,14.541,9.975h8.766c8.627,0,15.646-7.096,15.646-15.817V72.975   C164,64.253,156.98,57.157,148.354,57.157z" stroke="none" fill={fill} transform="matrix(1.4464868307113647, 0, 0, 1.4464868307113647, 109.13370513916016, 0.5868387222290039)"></path></g></svg>
  );
};

export default Logo;