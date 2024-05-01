function mergesort(a) {
    for (let [i, j, s] = [0, 1, 2]; s <= 2 * a.length; i = 0, j = s, s *= 2) for (; j < a.length; i += s, j += s) for (let [l, x, k] = [i, j - i, 0]; l < j; (a[l] <= a[j]) ? (l++) : ([a[j + k - 1], a[l]] = [a[l], a[j + k - 1]]), k = 0) for (; a[l] > a[j + k] && k < x; k++);
    return a
}