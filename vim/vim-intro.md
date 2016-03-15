##Vim intro




###Writing

	i 	- Enter insert mode
	I 	- Enter insert mode moving to the first non blank character
	s 	- Delete char under your cursor and enter insert mode
	S 	- Delete line and enter insert mode
	a 	- Enter insert mode after cursor
	A 	- Enter insert mode at the end of the line
	o 	- Enter insert mode on the next line
	O 	- Enter insert mode on the above line
	C	- Delete from cursor to the end of the line


###Moving WBEG

	w 	- Forward to the beginning of next word
	W	- Forward to the beginning of the next WORD (characters separated by white spaces)
	b	- Same as w but backwads
	B 	- Same as W but backwads
	e 	- Forward to the next end of word
	E 	- Forward to the next end of WORD
	gg	- Top of the file
	G	- Bottom of the file
	0 	- Beginning of the line
	$ 	- Last character of the line
	^ 	- First non blank character of the line


###Moving with FT

	[stuff] => optional
	<stuff> => required

	[n]f<o> - Forward until (nth) (o) Inclusive
	[n]F<o> - Backwads until (nth) (o) Inclusive
	[n]t<o> - same as f but Exclusive
	[n]T<o> - same as F but Exclusive


###Searching

	/		- Forward
	?		- Backward
	n 		- move to the next occurrence
	N 		- move to the previous occurrence
	:nohl	- remove search highlightr
	*		- Search word under the cursor bounded (exact word)
	g* 		- Same as * but unbounded
	#		- same as * but backward
	g#		- same as g* but backward


###Copy and paste

	y 	- Yank + verb
	yy 	- Yank the entire line
	p 	- paste after cursor
	P 	- paste before cursor
	
	Or enter in visual mode and copy with y.
	

###Undoing/Redoing changes

	u 		- undo stuff
	Ctrl-R 	- redo stuff


###Bonus!!!

	CI( - Change Inside (
