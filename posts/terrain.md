This is a scenery generation tool built for Roblox. The destinations that NOVUS offered were pretty boring and limited, so I thought, "why not fly around the world?"

Roblox isn't built for large scale worlds, so it was a pretty interesting challenge.

![Terrain](/images/terrain.png)

# How it works

## QuadTree

The tiles are generated based off of a configured QuadTree. High Level-of-Detail (LOD) tiles are generated close to airports and points of interest, with gradually lower LOD tiles farther away.

This helps reduce loading times and the overall number of meshes and textures.

## Using Roblox as the Database

Textures and meshes are generated for each tile then uploaded to Roblox. The resulting Asset IDs are stored and mapped to the corresponding tile.

In the end, you're left with JSON dictionaries mapping tiles to Asset IDs.

## Dealing with Floating Point

Roblox runs on a 32-bit engine. This limits the size of the worlds we can create. At around 50k - 100k meters, the game engine starts to break down.

To fix this, I came up with a "floating origin" system. Basically, the entire map is shifted every so often, moving the player back to the origin. This prevents the player from getting too far away from the origin.
