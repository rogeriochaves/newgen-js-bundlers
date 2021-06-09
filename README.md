# New Generation JS Bundlers

Some quick and basic benchmarks

## esbuild

```
$ time npm run build
~0.5s

$ du -h dist/
136K

$ du -h node_modules/
12M
```

feeling: blazing fast, but no batteries included

## snowpack

```
$ time npm run build
~1.5s

$ du -h build/
148K

$ du -h node_modules/
31M
```

feeling: batteries included, while keeping it simple

## vite

```
$ time npm run build
~8.2s

$ du -h dist/
136K

$ du -h node_modules/
46M
```

feeling: too much batteries included, more opinionated than snowpack, slow production build

## wmr

```
$ time npm run build
~2.8s

$ du -h dist/
24K

$ du -h node_modules/
4.6M
```

feeling: impressive small bundle and node_modules, but if you deviate just a bit from preact everything breaks

## parcel 2

```
$ time npm run build
~7s

$ rm dist/*.map; du -h dist
136K

$ du -h node_modules/
298M
```

feeling: huge node_modules, but being parcel, feels much more battle-tested
