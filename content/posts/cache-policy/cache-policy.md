---
title: An introduction to Window TinyLFU
date: 2021-04-26T20:20:51.000Z
description: TinyLFU is a frequency-based cache admission policy
--- 
## Foreword
I will just easily go through techniques used by Window TinyLFU.

## Why Cache?
Because we want to access data fast. The buffering provided by a cache benefits both latency and throughput.

## Eviction Policies
- Since we cannot cache all data we have, we need to discard some cache when out of space
- We should consider what the cost is if we choose the policy
- Eviction decisions should be done in an efficient manner, in order to avoid a situation in which the computation and space overheads required to answer these questions surpasses the benefit of using the cache
- Hit rate, latency & space matter

#### Examples
- Least recently used (LRU): Discards the least recently used items first
- Least frequently used (LFU): Discards data that was least frequently used
- Segment LRU (SLRU):
  - SLRU cache is divided into two segments, a probationary segment and a
protected segment
  - Lines in each segment are ordered from the most to the least recently
accessed
  - Data from misses is added to the cache at the most recently accessed end of
the probationary segment
  - Hits are removed from wherever they currently reside and added to the most
recently accessed end of the protected segment
  - Lines in the protected segment have thus been accessed at least twice

## Probability data structure

#### Examples
- Bloom Filter
  - Pairwise independent hash functions
  - Used to test whether an element is a member of a set
  - Two result: "possibly in set" or "definitely not in set"
  - isInSet(input) = (h1(input) and h2(input) and h3(input) ...)
- Count-min Sketch
  - Pairwise independent hash functions
  - Used to count elements
  - count(input) = min(h1(input), h2(input), h3(input), ...)

## Admission policy
- Hope to boost the effectiveness of caches
- Given a newly accessed item and an eviction candidate from the cache, our
scheme decides, based on the recent access history, whether it is worth
admitting the new item into the cache at the expense of the eviction candidate
- An accessed item is only inserted into the cache if an admission policy
decides that the cache hit ratio is likely to benefit from replacing it with the
cache victim

### TinyLFU
TinyLFU admission policy use Bloom Filter and Count-min Sketch to trace state of elements.
![TinyLFU structure](cache-policy-pics/tinylfu.png)

If there is a new element insert event that makes the main cache(SLRU) discard its element, they will be compared with the
state of TinyLFU admission policy (Bloom Filter and Count-min Sketch).
![TinyLFU with Main Cache](cache-policy-pics/tinylfu-2.png)

Finally, for sparse bursts, the paper suggest a LRU as window cache.
![W-TinyLFU](cache-policy-pics/w-tinylfu.png)

## Reference
- [Cache(wikipedia)](https://en.wikipedia.org/wiki/Cache_(computing))
- [Cache replacement policies](https://en.wikipedia.org/wiki/Cache_replacement_policies)
- [Caffeine wiki](https://github.com/ben-manes/caffeine/wiki/Efficiency)
- [Window TinyLFU paper](https://dl.acm.org/doi/10.1145/3149371)