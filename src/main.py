# MER 2.0 – Core Scroll Engine
# Forged on ACT Reconciliation Day, 2 June 2025

import os

SCROLLS_DIR = "../scrolls"

def read_scrolls():
    scrolls = []
    for file_name in os.listdir(SCROLLS_DIR):
        if file_name.endswith(".txt"):
            with open(os.path.join(SCROLLS_DIR, file_name), 'r', encoding='utf-8') as file:
                scrolls.append((file_name, file.read()))
    return scrolls

def analyze_scroll(scroll):
    # Placeholder: Add AI/logic later
    print(f"Reading {scroll[0]}...\n")
    print(scroll[1])
    print("\n---\n")

if __name__ == "__main__":
    scrolls = read_scrolls()
    for scroll in scrolls:
        analyze_scroll(scroll)
