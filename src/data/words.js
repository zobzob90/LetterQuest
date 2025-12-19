/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   words.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ertrigna <ertrigna@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2025/12/19 16:39:57 by ertrigna          #+#    #+#             */
/*   Updated: 2025/12/19 18:50:05 by ertrigna         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export const wordsData = ["chat", "chien", "jouet", "code", "lapin", "maison", "appartement", "garantie", "console", "constitution", "test", "langue", "mouton", "arme", "fusil"]

export function getRandomWord()
{
	const index = Math.floor(Math.random() * wordsData.lenght);
	return wordsData[index];
}
