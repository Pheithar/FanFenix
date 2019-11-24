

filename=document

pdf:
	pdflatex ${filename}.tex

clean:
	#rm -f ${filename}.{ps,log,aux,out,dvi,bbl,blg}
	rm -f *.out *aux *bbl *blg *log *toc *.ptb *.tod *.fls *.fdb_latexmk *.lof

read:
	evince $(filename).pdf &
