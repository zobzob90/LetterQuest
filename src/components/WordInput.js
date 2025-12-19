/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   WordInput.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ertrigna <ertrigna@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2025/12/19 16:39:54 by ertrigna          #+#    #+#             */
/*   Updated: 2025/12/19 19:12:41 by ertrigna         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

export function getHiddenWord(word, guessedLetters)
{
	return word.split('').map(letter => (guessedLetters.includes(letter) ? letter : "_")).join(' ');
}

export function isLetterInWord(letter, word)
{
	if (word.includes(letter))
		return true;
	else
		return false;
}
