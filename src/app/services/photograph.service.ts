import { Injectable } from '@angular/core';
import { Photograph } from '../models/photograph.model';
import {PeopleModel} from "../models/people.model";

@Injectable({ providedIn: 'root' })
export class PhotographService {
  private photographs: Photograph[] = [
    {
      id: 1,
      name: 'Grand design angle',
      location: 'Bratislava',
      description: 'Something...',
      imageUrl: 'https://i.imgur.com/W9Huhrb.jpg'
    },
     {
      id: 2,
      name: 'Reflection',
      location: 'Bratislava',
      description: 'Something...',
      imageUrl: 'https://i.imgur.com/OUXDrry.jpg'
    },
        {
      id: 3,
      name: 'Ivy-Clad Facades',
      location: 'Bratislava',
      description: 'Sunlit Sentinels: Ivy-Clad Facades on the City\'s Avenue',
      imageUrl: 'https://i.imgur.com/qibrt5E.jpg'
    },
        {
      id: 4,
      name: 'Architectural balconies',
      location: 'Bratislava',
      description: 'Modernist Curves Against a Blue Sky',
      imageUrl: 'https://i.imgur.com/X937ev7.jpg'
    },
        {
      id: 5,
      name: 'Dusk Game',
      location: 'Bratislava',
      description: 'Twilight Hockey on a Frozen Pond',
      imageUrl: 'https://i.imgur.com/Wnkl5Uq.jpg'
    },
        {
      id: 6,
      name: 'Urban Gloom',
      location: 'Frankfurt am Main',
      description: 'Skyscrapers Piercing the Overcast Sky',
      imageUrl: 'https://i.imgur.com/SVPQflH.jpg'
    },
    {
      id: 7,
      name: 'Symmetry in Shade',
      location: 'Bratislava',
      description: ': The Balconies\' Ballet',
      imageUrl: 'https://i.imgur.com/lK6JOr2.jpg'
    },
    {
      id: 8,
      name: 'Reflections of Serenity',
      location: 'Bratislava',
      description: 'Glass and Steel in Harmony',
      imageUrl: 'https://i.imgur.com/DUy4hUw.jpg'
    },
    {
      id: 9,
      name: 'A City\'s Passage',
      location: 'Frankfurt am Main',
      description: 'The Path to Urban Wonders',
      imageUrl: 'https://i.imgur.com/BXQo6IN.jpg'
    },
    {
      id: 10,
      name: 'Elegance at Dusk',
      location: 'Frankfurt am Main',
      description: 'The Hotel\'s Evening Glow',
      imageUrl: 'https://i.imgur.com/gIWIoBy.jpg'
    },
        {
      id: 11,
      name: 'Geometric Juxtaposition',
      location: 'Frankfurt am Main',
      description: 'A Study of Urban Facades',
      imageUrl: 'https://i.imgur.com/3Rdvfeb.jpg'
    },
        {
      id: 12,
      name: 'Urban Solitude',
      location: 'Frankfurt am Main',
      description: 'A Moment\'s Pause in the City',
      imageUrl: 'https://i.imgur.com/onNoruM.jpg'
    },
        {
      id: 13,
      name: 'Monolithic Perspectives',
      location: 'Frankfurt am Main',
      description: 'Skyward Gaze at Architectural Might',
      imageUrl: 'https://i.imgur.com/fjCs7PI.jpg'
    },
        {
      id: 14,
      name: 'The Urban Canyon',
      location: 'Frankfurt am Main',
      description: 'Shadows and Structures',
      imageUrl: 'https://i.imgur.com/WYLZdLh.jpg'
    },
        {
      id: 15,
      name: 'Cobblestone Commute',
      location: 'Frankfurt am Main',
      description: 'The Journey Through History',
      imageUrl: 'https://i.imgur.com/CXgmc7e.jpg'
    },
        {
      id: 16,
      name: 'A Quiet Reflection',
      location: 'Frankfurt am Main',
      description: 'Faith Amidst the Urban Rush',
      imageUrl: 'https://i.imgur.com/vJ2nfdN.jpg'
    },
        {
      id: 17,
      name: 'Gothic Grandeur',
      location: 'Frankfurt am Main',
      description: 'The Cathedral\'s Spire in Modern Contrast',
      imageUrl: 'https://i.imgur.com/h2GKUSj.jpg'
    },
        {
      id: 18,
      name: 'Rainy Day Rhythms',
      location: 'Frankfurt am Main',
      description: 'Life Crosses the Love Lock Bridge',
      imageUrl: 'https://i.imgur.com/VTUm1vX.jpg'
    },
            {
      id: 19,
      name: 'Spires and Squares',
      location: 'Frankfurt am Main',
      description: 'A Glimpse of the Old Among the New',
      imageUrl: 'https://i.imgur.com/J6rWhU6.jpg'
    },
                {
      id: 20,
      name: 'Alleyway Ascension',
      location: 'Frankfurt am Main',
      description: ' Stairway to the Urban Cloister',
      imageUrl: 'https://i.imgur.com/WiwG5Jl.jpg'
    },
                {
      id: 21,
      name: 'Concrete Jungles',
      location: 'Frankfurt am Main',
      description: 'The Beat of the City\'s Heart',
      imageUrl: 'https://i.imgur.com/tFF3qom.jpg'
    },
                {
      id: 22,
      name: 'Urban Arteries',
      location: 'Frankfurt am Main',
      description: 'The Flow of City Life',
      imageUrl: 'https://i.imgur.com/5wuaJzo.jpg'
    },
                {
      id: 23,
      name: 'Brutalist Rhythms',
      location: 'Frankfurt am Main',
      description: 'The Dance of Light and Shadow',
      imageUrl: 'https://i.imgur.com/6s557oC.jpg'
    },
                {
      id: 24,
      name: 'Sculptural Sentry',
      location: 'Frankfurt am Main',
      description: 'The Guardian of Modernity',
      imageUrl: 'https://i.imgur.com/he0bI3s.jpg'
    },
                {
      id: 25,
      name: 'Metropolitan Pulse',
      location: 'Frankfurt am Main',
      description: 'The Beat of the Streets',
      imageUrl: 'https://i.imgur.com/aPvjiHA.jpg'
    },
                {
      id: 26,
      name: 'Gothic Echoes',
      location: 'Koblenz',
      description: 'Whispers from the Stone',
      imageUrl: 'https://i.imgur.com/7DfgsX0.jpg'
    },
                {
      id: 27,
      name: 'Winter\'s Retreat:',
      location: 'Koblenz',
      description: 'The Quiet Before Spring',
      imageUrl: 'https://i.imgur.com/t3M0ARh.jpg'
    },
                {
      id: 28,
      name: 'Silhouette of Solitude',
      location: 'Marburg',
      description: 'A Contrast in Light and Shadow',
      imageUrl: 'https://i.imgur.com/4YDDiXG.jpg'
    },
                {
      id: 29,
      name: 'Forgotten Comfort',
      location: 'Devín',
      description: 'The Abandoned Garden Chair',
      imageUrl: 'https://i.imgur.com/4Nu8HSi.jpg'
    },
                {
      id: 30,
      name: 'Last Light',
      location: 'Bratislava',
      description: 'A Building\'s Golden Hour',
      imageUrl: 'https://i.imgur.com/A7BcWdH.jpg'
    },
                    {
      id: 31,
      name: 'Architectural Waves',
      location: 'Bratislava',
      description: 'Modernism Meets the Sky',
      imageUrl: 'https://i.imgur.com/h4VE0fB.jpg'
    },
                    {
      id: 32,
      name: 'The Sentinel',
      location: 'Bacharach',
      description: 'Books and Wisdom Cast in Bronze',
      imageUrl: 'https://i.imgur.com/VWIJIPZ.jpg'
    },
                    {
      id: 33,
      name: 'Sunny Facade',
      location: 'Bratislava',
      description: 'The Urban Canvas of Light',
      imageUrl: 'https://i.imgur.com/udGh34j.jpg'
    },
                    {
      id: 34,
      name: 'Evening Illumination',
      location: 'Bratislava',
      description: 'A Beacon of Urban Calm',
      imageUrl: 'https://i.imgur.com/2N69Wjl.jpg'
    },
                    {
      id: 35,
      name: 'Moment of Reflection',
      location: 'Koblenz',
      description: 'Contemplation by the River',
      imageUrl: 'https://i.imgur.com/RzvQTV9.jpg'
    },
                    {
      id: 36,
      name: 'Monumental Legacy',
      location: 'Koblenz',
      description: 'Echoes of History in Stone and Sky',
      imageUrl: 'https://i.imgur.com/PxM9kND.jpg'
    },
                    {
      id: 37,
      name: 'Message on the Wind',
      location: 'Marburg',
      description: 'A Call for Peace in the Sky',
      imageUrl: 'https://i.imgur.com/YM8SQAg.jpg'
    },
                    {
      id: 38,
      name: 'Strength Above',
      location: 'Koblenz',
      description: 'The Flag of Pride Against Stony Backdrops',
      imageUrl: 'https://i.imgur.com/DhTbE3V.jpg'
    },
                    {
      id: 39,
      name: 'Portal of Perspective',
      location: 'Koblenz',
      description: 'Framing the Past Through the Present',
      imageUrl: 'https://i.imgur.com/pdhwhT5.jpg'
    },
                    {
      id: 40,
      name: 'Voices in the Crowd',
      location: 'Marburg',
      description: 'A Spectrum of Unity and Diversity',
      imageUrl: 'https://i.imgur.com/tijRMML.jpg'
    },
                    {
      id: 41,
      name: 'Together in Contrast',
      location: 'Marburg',
      description: 'A Tapestry of Community Voices',
      imageUrl: 'https://i.imgur.com/Dfy3gXA.jpg'
    },
                    {
      id: 42,
      name: 'Silhouettes at Sunset',
      location: 'Marburg',
      description: 'The Mystery of Twilight Architecture',
      imageUrl: 'https://i.imgur.com/nstUPp3.jpg'
    },
                    {
      id: 43,
      name: 'Culinary Contemplation',
      location: 'Marburg',
      description: 'A Moment on the Bridge',
      imageUrl: 'https://i.imgur.com/YGfrP9Q.jpg'
    },
                    {
      id: 44,
      name: 'Cobblestone Glow',
      location: 'Marburg',
      description: 'Evening Descends on the Old Town',
      imageUrl: 'https://i.imgur.com/7xg28xe.jpg'
    },
                    {
      id: 45,
      name: 'Protest in Profile',
      location: 'Marburg',
      description: 'A Statement in the Streets',
      imageUrl: 'https://i.imgur.com/eRabBUM.jpg'
    },
                        {
      id: 46,
      name: 'Illuminated Pathways',
      location: 'Marburg',
      description: 'Nightfall Over Nostalgic Streets',
      imageUrl: 'https://i.imgur.com/no42Whz.jpg'
    },
                        {
      id: 47,
      name: 'Lantern’s Whisper',
      location: 'Boppard',
      description: 'An Ode to Medieval Charm',
      imageUrl: 'https://i.imgur.com/5AtP4KE.jpg'
    },
                            {
      id: 48,
      name: 'Vintage Explorer',
      location: 'Boppard',
      description: 'A Journey Through Time',
      imageUrl: 'https://i.imgur.com/Lcr4ATa.jpg'
    },
                            {
      id: 49,
      name: 'Suburban Tranquility',
      location: 'Boppard',
      description: 'A Glimpse of Serene Living',
      imageUrl: 'https://i.imgur.com/4ZxYaPd.jpg'
    },
                            {
      id: 50,
      name: 'Warmth in the Old Town',
      location: 'Marburg',
      description: 'A Cozy Corner at Dusk',
      imageUrl: 'https://i.imgur.com/RhepjFj.jpg'
    },
                            {
      id: 51,
      name: 'Railway to Reverie',
      location: 'Boppard',
      description: 'The Quiet Tracks of Contemplation',
      imageUrl: 'https://i.imgur.com/PJudoEK.jpg'
    },
                            {
      id: 52,
      name: 'Archway Observations',
      location: 'Boppard',
      description: 'The Stoic Guardian of the Path',
      imageUrl: 'https://i.imgur.com/bbZ9QkM.jpg'
    },
                            {
      id: 53,
      name: 'Village Reverie',
      location: 'Boppard',
      description: 'A Spire Amongst the Sleepy Shores',
      imageUrl: 'https://i.imgur.com/Vt3wUZM.jpg'
    },
                            {
      id: 54,
      name: 'Twilight Tranquility',
      location: 'Boppard',
      description: 'The Caravan\'s Rest by the Homestead',
      imageUrl: 'https://i.imgur.com/JWP4wi2.jpg'
    },
                            {
      id: 55,
      name: 'Ornamental Grace',
      location: 'Boppard',
      description: 'The Whitewashed Elegance of Architectural Detail',
      imageUrl: 'https://i.imgur.com/Z7YmhuU.jpg'
    },
                            {
      id: 56,
      name: 'Subterranean Luminescence',
      location: 'Boppard',
      description: 'The Urban Grotto\'s Glow"',
      imageUrl: 'https://i.imgur.com/aXXsbYP.jpg'
    },
                            {
      id: 57,
      name: 'Rustic Retreat',
      location: 'Boppard',
      description: 'Streamside Sanctuary in the Village',
      imageUrl: 'https://i.imgur.com/NbdORq3.jpg'
    },
                            {
      id: 58,
      name: 'Riverside Prologue',
      location: 'Bacharach',
      description: 'The Church Overlooking the Flow of Time',
      imageUrl: 'https://i.imgur.com/b3gqWyz.jpg'
    },
                                {
      id: 59,
      name: 'Sentinel\'s Path',
      location: 'Bacharach',
      description: 'The Tower\'s Lonely Vigil',
      imageUrl: 'https://i.imgur.com/E4DiaIp.jpg'
    },
                                {
      id: 60,
      name: 'Sculpted Verdure',
      location: 'Boppard',
      description: 'The Topiary\'s Architectural Embrace',
      imageUrl: 'https://i.imgur.com/sRQTsIP.jpg'
    },
                                {
      id: 61,
      name: 'Illuminated History',
      location: 'Bacharach',
      description: 'The Lamp Post\'s Green Mantle',
      imageUrl: 'https://i.imgur.com/06xdrtx.jpg'
    },
                                {
      id: 62,
      name: 'Heritage Hues',
      location: 'Bacharach',
      description: 'The Post Horn\'s Echo',
      imageUrl: 'https://i.imgur.com/Wz11EWm.jpg'
    },
                                {
      id: 63,
      name: 'Archway into Antiquity',
      location: 'Bacharach',
      description: ' A Glimpse Through Time',
      imageUrl: 'https://i.imgur.com/6v8AV7d.jpg'
    },
                                {
      id: 64,
      name: 'Nature\'s Hoops',
      location: 'Bacharach',
      description: 'A Game of Shadows and Silhouettes',
      imageUrl: 'https://i.imgur.com/G3lENBh.jpg'
    },
                                    {
      id: 65,
      name: 'Echoes of Yesteryear',
      location: 'Trier',
      description: 'The Timeless Facade',
      imageUrl: 'https://i.imgur.com/lKCVnAc.jpg'
    },
                                    {
      id: 66,
      name: 'Secrets Behind the Gate',
      location: 'Trier',
      description: 'A Glimpse into Seclusion',
      imageUrl: 'https://i.imgur.com/5BJTnOF.jpg'
    },
                                    {
      id: 67,
      name: 'Carnival of Shadows',
      location: 'Cologne',
      description: 'A Masquerade of Gnomes',
      imageUrl: 'https://i.imgur.com/mBNgLSE.jpg'
    },
                                    {
      id: 68,
      name: 'Solitary Rhythms',
      location: 'Cologne',
      description: 'The Lone Drummer\'s March',
      imageUrl: 'https://i.imgur.com/LSjiYOs.jpg'
    },
                                    {
      id: 69,
      name: 'Monarchs of the Stairs',
      location: 'Cologne',
      description: 'A Regal Repose',
      imageUrl: 'https://i.imgur.com/JI5XhPi.jpg'
    },
                                    {
      id: 70,
      name: 'Candid Moments',
      location: 'Cologne',
      description: 'Snack Break at the Carnival',
      imageUrl: 'https://i.imgur.com/fyW5nNX.jpg'
    },
                                    {
      id: 71,
      name: 'Modern Curves',
      location: 'Cologne',
      description: 'Urban Elegance in the City Core',
      imageUrl: 'https://i.imgur.com/lsH7H4O.jpg'
    },
                                        {
      id: 72,
      name: 'Vibrant Vigil',
      location: 'Cologne',
      description: 'The Party Zone\'s Eclectic Guardians',
      imageUrl: 'https://i.imgur.com/9xAVx35.jpg'
    },
                                        {
      id: 73,
      name: 'Costume Chronicles',
      location: 'Cologne',
      description: 'Tales from the Carnival Streets',
      imageUrl: 'https://i.imgur.com/1rhTAvy.jpg'
    },
                                        {
      id: 74,
      name: 'Camaraderie in Costumes',
      location: 'Cologne',
      description: 'A Gathering of Festive Spirits',
      imageUrl: 'https://i.imgur.com/pM0JZgO.jpg'
    },
                                        {
      id: 75,
      name: 'Elevated Vibrance',
      location: 'Cologne',
      description: ' Standout Styles on a Cobblestone Stage',
      imageUrl: 'https://i.imgur.com/IfSkHlC.jpg'
    },
                                        {
      id: 76,
      name: 'Royal Alleys',
      location: 'Cologne',
      description: 'Crowns and Conversations',
      imageUrl: 'https://i.imgur.com/yhpAiog.jpg'
    },
                                        {
      id: 77,
      name: 'Emerald Parade',
      location: 'Cologne',
      description: 'The March of Festive Uniformity',
      imageUrl: 'https://i.imgur.com/xZOu2S2.jpg'
    },
                                        {
      id: 78,
      name: 'Culinary Comrades',
      location: 'Cologne',
      description: 'Chef and Officer on Patrol',
      imageUrl: 'https://i.imgur.com/kMHpn6i.jpg'
    },
                                        {
      id: 79,
      name: 'Contemplative Carnival',
      location: 'Cologne',
      description: 'Pensive Moments Amidst Revelry',
      imageUrl: 'https://i.imgur.com/3x9kwcD.jpg'
    },
                                        {
      id: 80,
      name: 'Structural Symphony',
      location: 'Cologne',
      description: 'The Ironwork Lattice',
      imageUrl: 'https://i.imgur.com/YVlyayy.jpg'
    },
                                        {
      id: 81,
      name: 'Locks of Legacy',
      location: 'Cologne',
      description: 'Love\'s Everlasting Emblem',
      imageUrl: 'https://i.imgur.com/qTdg8W1.jpg'
    },
                                        {
      id: 82,
      name: 'Festive Flair',
      location: 'Cologne',
      description: 'Smiles and Scrubs on the Steel Bridge',
      imageUrl: 'https://i.imgur.com/x5qdp80.jpg'
    },
                                        {
      id: 83,
      name: 'Medieval Meets Modern',
      location: 'Cologne',
      description: 'Knights on a Steel Path',
      imageUrl: 'https://i.imgur.com/7z9H78d.jpg'
    },
                                            {
      id: 84,
      name: 'Conversations in Orange',
      location: 'Cologne',
      description: 'The Penitentiary Parade',
      imageUrl: 'https://i.imgur.com/R0xTxpD.jpg'
    },
                                                {
      id: 85,
      name: 'Cityscape from the Summit',
      location: 'Cologne',
      description: 'The Glass Panorama',
      imageUrl: 'https://i.imgur.com/KB79HZu.jpg'
    },
                                                {
      id: 86,
      name: 'Lovers\' Vow',
      location: 'Cologne',
      description: 'The Bridge of Eternal Bonds',
      imageUrl: 'https://i.imgur.com/F8HNmso.jpg'
    },
                                                {
      id: 87,
      name: 'Transit Through Time',
      location: 'Cologne',
      description: 'The Ironclad Journey',
      imageUrl: 'https://i.imgur.com/lUuENJr.jpg'
    },
                                                {
      id: 88,
      name: 'Costume Cavalcade',
      location: 'Cologne',
      description: 'The Carnival’s Quirks',
      imageUrl: 'https://i.imgur.com/O3fWDT1.jpg'
    },
                                                {
      id: 89,
      name: 'Spectators of the Spectacle',
      location: 'Cologne',
      description: 'The Observant Throng',
      imageUrl: 'https://i.imgur.com/0uL8fIU.jpg'
    },
                                                {
      id: 90,
      name: 'Contrast in Motion',
      location: 'Brno',
      description: 'The New Speeds by the Old',
      imageUrl: 'https://i.imgur.com/GTGcAs5.jpg'
    },
                                                {
      id: 91,
      name: 'Silent Sentinels',
      location: 'Brno',
      description: 'The Assembly of Shadows and Light',
      imageUrl: 'https://i.imgur.com/9wy6yJ1.jpg'
    },
                                                {
      id: 92,
      name: 'City Tapestry',
      location: 'Brno',
      description: 'A Vista of Varying Velvets',
      imageUrl: 'https://i.imgur.com/K7Xh5cf.jpg'
    },
                                                {
      id: 93,
      name: 'Festive Frame',
      location: 'Brno',
      description: 'A Glimpse Through the Holiday Portal',
      imageUrl: 'https://i.imgur.com/JGZcIbc.jpg'
    },
                                                    {
      id: 94,
      name: 'Sovereign Stance',
      location: 'Brno',
      description: 'The Tower\'s Timeless Tale',
      imageUrl: 'https://i.imgur.com/M4H4ii1.jpg'
    },
                                                        {
      id: 95,
      name: 'Stellar Stillness',
      location: 'Brno',
      description: 'The Astronaut\'s Earthbound Contemplation',
      imageUrl: 'https://i.imgur.com/TubLibg.jpg'
    },
                                                        {
      id: 96,
      name: 'Pedestrian Rhythms',
      location: 'Brno',
      description: 'The Crosswalk of Lives',
      imageUrl: 'https://i.imgur.com/UaS6Wqq.jpg'
    },
                                                        {
      id: 97,
      name: 'Time\'s Sentinel',
      location: 'Brno',
      description: 'The Clock Tower\'s Watchful Eye',
      imageUrl: 'https://i.imgur.com/u3aKmcc.jpg'
    },
                                                        {
      id: 98,
      name: 'Artful Balance',
      location: 'Brno',
      description: 'The Mural\'s Illusion of Motion',
      imageUrl: 'https://i.imgur.com/X2KS8Oq.jpg'
    },
                                                        {
      id: 99,
      name: 'Gothic Whispers',
      location: 'Brno',
      description: 'The Lanterns\' Guide to the Spires',
      imageUrl: 'https://i.imgur.com/2A6jJxj.jpg'
    },
                                                        {
      id: 100,
      name: 'Contemplation Vista',
      location: 'Unknown',
      description: 'The Bench Overlooking Silence',
      imageUrl: 'https://i.imgur.com/UrquWVu.jpg'
    },
                                                        {
      id: 101,
      name: 'Lanterns in Twilight',
      location: 'Brno',
      description: 'Illuminated Whispers Among Branches',
      imageUrl: 'https://i.imgur.com/dfuEJAk.jpg'
    },
                                                        {
      id: 102,
      name: 'Velocity in Stillness',
      location: 'Brno',
      description: 'The City\'s Fleeting Moments',
      imageUrl: 'https://i.imgur.com/LXJti9m.jpg'
    },
                                                            {
      id: 103,
      name: 'Secluded Observations',
      location: 'Brno',
      description: 'A Peek into the Park\'s Winter Evening',
      imageUrl: 'https://i.imgur.com/Q0aZagA.jpg'
    },
                                                            {
      id: 104,
      name: 'Vertical Echoes',
      location: 'Brno',
      description: 'The Neon Pulse of Cultural Memory',
      imageUrl: 'https://i.imgur.com/e7jicI7.jpg'
    },
    {
      id: 105,
      name: 'Winter\'s Embrace',
      location: 'Hainburg',
      description: 'The River\'s Serpentine Flow',
      imageUrl: 'https://i.imgur.com/rHyEtjJ.jpg'
    },
    {
      id: 106,
      name: 'Celestial Spotlight',
      location: 'Hainburg',
      description: 'Nature\'s Stage',
      imageUrl: 'https://i.imgur.com/EVG4Ku4.jpg'
    },
                                                            {
      id: 107,
      name: 'Twilight\'s Canvas',
      location: 'Hainburg',
      description: 'Evening Colors over the Quiet Land',
      imageUrl: 'https://i.imgur.com/6bRaL3h.jpg'
    },
                                                            {
      id: 108,
      name: 'Ancient Watchtower',
      location: 'Hainburg',
      description: 'Glimpses through Time',
      imageUrl: 'https://i.imgur.com/ih2M3rE.jpg'
    },
                                                            {
      id: 109,
      name: 'Serpentine Escape',
      location: 'Unknown',
      description: 'Winding Through Nature\'s Hues',
      imageUrl: 'https://i.imgur.com/AfduLPR.jpg'
    },
                                                            {
      id: 110,
      name: 'Targeted Seclusion',
      location: 'Hainburg',
      description: 'Archery Amongst the Trees',
      imageUrl: 'https://i.imgur.com/Tby95Tn.jpg'
    },
                                                            {
      id: 111,
      name: 'Lone Sentinel',
      location: 'Hainburg',
      description: 'The Hilltop\'s Quiet Vigil',
      imageUrl: 'https://i.imgur.com/6RCvhWX.jpg'
    }

  ].map(photo => ({ ...photo, isSaved: false, isRotatingOut: false, isRotatingIn: false}));

    private people: PeopleModel[] = [
    {
      id: 1,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/dpPFofU.jpg'
    },
          {
      id: 2,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/jG1q9FS.jpg'
    },
          {
      id: 3,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/7hgpzXb.jpg'
    },
          {
      id: 4,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/64eSKBz.jpg'
    },
          {
      id: 5,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/CQR3OPj.jpg'
    },
          {
      id: 6,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/YGFYxLM.jpg'
    },
          {
      id: 7,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/J4g9izm.jpg'
    },
          {
      id: 8,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/TZcZveu.jpg'
    },
          {
      id: 9,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/qVwqW0R.jpg'
    },
          {
      id: 10,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/YojHJhz.jpg'
    },
          {
      id: 11,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/NfGgazw.jpg'
    },
          {
      id: 12,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/oInZCpC.jpg'
    },
          {
      id: 13,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/QCpg8qo.jpg'
    },
          {
      id: 14,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/wiu6J1V.jpg'
    },
          {
      id: 15,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/uNQzUcI.jpg'
    },
          {
      id: 16,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/1L3s678.jpg'
    },
          {
      id: 17,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/yRSaKiy.jpg'
    },
          {
      id: 18,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/ubMUcMu.jpg'
    },
          {
      id: 19,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/k48RT5G.jpg'
    },
          {
      id: 20,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/H0XG895.jpg'
    },
          {
      id: 21,
      nameOfActor: 'Sofiia',
      location: 'Hainburg',
      imageUrl: 'https://i.imgur.com/JdfAItj.jpg'
    }
      ]

  getPhotographs() {
    return this.photographs.slice();
  }
    getPhotographsOfPeople() {
    return this.people.slice();
  }
  getUniqueLocations() {
  return [...new Set(this.photographs.map(photo => photo.location))];
}

}
