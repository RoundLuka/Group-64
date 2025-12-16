def fruit(reels, spins):
    rewards = {
        "Wild": 10,
        "Star": 9,
        "Bell": 8,
        "Shell": 7,
        "Seven": 6,
        "Cherry": 5,
        "Bar": 4,
        "King": 3,
        "Queen": 2,
        "Jack": 1
    }
    
    slot1 = reels[0]
    slot2 = reels[1]
    slot3 = reels[2]
    
    spin1 = spins[0]
    spin2 = spins[1]
    spin3 = spins[2]

    item1 = slot1[spin1]
    item2 = slot2[spin2]
    item3 = slot3[spin3]
    
    if item1 == item2 == item3:
        return rewards[item1] * 10
    elif [item1, item2, item3].count("Wild") == 2:
        return 10
    elif (item1 == item2 or item1 == item3 or item2 == item3) and "Wild" not in [item1, item2, item3]:
        return rewards[item1]
    elif (item1 == item2 or item1 == item3 or item2 == item3) and "Wild" in [item1, item2, item3]:
        return rewards[item1] * 2
    else:
        return 0
    
reels = [['Bell', 'Jack', 'Wild', 'Shell', 'Seven', 'Bar', 'Queen', 'Star', 'Cherry', 'King'], ['Shell', 'Wild', 'Star', 'Queen', 'Jack', 'Bell', 'Cherry', 'Seven', 'Bar', 'King'], ['Bar', 'Star', 'Shell', 'Seven', 'King', 'Queen', 'Bell', 'Jack', 'Cherry', 'Wild']]
spins = [0, 2, 1]

print(fruit(reels, spins))