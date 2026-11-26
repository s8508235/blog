---
date: '2026-11-26T22:40:21+08:00'
draft: false
title: 'Local LLM'
slug: "local-llm"
summary: 'How to build llama.cpp on Windows'
---
I use this with [Metyr](https://github.com/s8508235/metyr) to help me read foreign languages articles.
My PC is Windows 10.

# Install CUDA
https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/index.html

# Install Openssl
https://slproweb.com/products/Win32OpenSSL.html

# Build llama.cpp from source
```powershell
git clone https://github.com/ggml-org/llama.cpp
cd llama.cpp
# https://developer.nvidia.com/cuda/gpus
# 86 (Compute Capability 8.6): RTX 3050 - 3090 Ti, RTX A2000 - A6000
# 89 (Compute Capability 8.9): RTX 4050 - 4090
# 120 (Compute Capability 12.0): RTX 5050 - 5090
cmake -B build -DGGML_CUDA=ON -DCMAKE_CUDA_ARCHITECTURES=86
cmake -S . -B build -DGGML_CUDA=ON -DLLAMA_OPENSSL=ON -DOPENSSL_ROOT_DIR="C:/Program Files/OpenSSL-Win64"
```

## Download model
```powershell
hf download unsloth/Hy-MT2-7B-GGUF Hy-MT2-7B-Q5_K_M.gguf --local-dir models\
```

## run 
```powershell
# for 8G VRAM machine, it runs 5x t/s.
build\bin\Release\llama-server.exe --model models\Hy-MT2-7B-Q5_K_M.gguf --temperature 0.7 --flash-attn on -c 8192 -n 4096 -ngl 99 --top-k 20 --top-p 0.9 --min-p 0.1 --parallel 1 -ctk q8_0 -ctv q8_0
```