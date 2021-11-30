type LastChar<T, Prev = T> = T extends `${infer L}${infer R}` ? LastChar<R, L> : Prev;
type A1 = LastChar<'BFE'> // 'E'
type B2 = LastChar<'dev'> // 'v'
type C3 = LastChar<''> // never