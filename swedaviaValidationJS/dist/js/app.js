function validateForm(){var e=document.querySelector("body > div > main > form > div:nth-of-type(1) > label > input"),l=document.querySelector("body > div > main > form > div:nth-of-type(2) > label > input"),o=document.querySelector("body > div > main > form > div:nth-of-type(1) > span"),d=document.querySelector("body > div > main > form > div:nth-of-type(2) > span");return e.value&&l.value?(e.style.border="1px solid пкуут",o.style.display="none",l.style.border="1px solid green",d.style.display="none",!0):e.value?(e.style.border="1px solid green",o.style.display="none",l.style.border="1px solid #721c24",!(d.style.display="inline-block")):l.value?(e.style.border="1px solid #721c24",o.style.display="inline-block",l.style.border="1px solid green",!(d.style.display="none")):(e.style.border="1px solid #721c24",o.style.display="inline-block",l.style.border="1px solid #721c24",!(d.style.display="inline-block"))}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0ZUZvcm0iLCJ1c2VyTmFtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVzZXJQYXNzd29yZCIsIm1lc3NhZ2VOYW1lIiwibWVzc2FnZVBhc3N3b3JkIiwidmFsdWUiLCJzdHlsZSIsImJvcmRlciIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLGVBQ0wsSUFBSUMsRUFBV0MsU0FBU0MsY0FBYyxpRUFBa0VDLEVBQWVGLFNBQVNDLGNBQWMsaUVBQWtFRSxFQUFjSCxTQUFTQyxjQUFjLHdEQUF5REcsRUFBa0JKLFNBQVNDLGNBQWMsd0RBRXZWLE9BQUdGLEVBQVNNLE9BQVNILEVBQWFHLE9BQzlCTixFQUFTTyxNQUFNQyxPQUFTLGtCQUN4QkosRUFBWUcsTUFBTUUsUUFBVSxPQUM1Qk4sRUFBYUksTUFBTUMsT0FBUyxrQkFDNUJILEVBQWdCRSxNQUFNRSxRQUFVLFFBQ3pCLEdBRUhULEVBQVNNLE9BQ2JOLEVBQVNPLE1BQU1DLE9BQVMsa0JBQ3hCSixFQUFZRyxNQUFNRSxRQUFVLE9BQzVCTixFQUFhSSxNQUFNQyxPQUFTLHNCQUM1QkgsRUFBZ0JFLE1BQU1FLFFBQVUsaUJBRzVCTixFQUFhRyxPQUNqQk4sRUFBU08sTUFBTUMsT0FBUyxvQkFDeEJKLEVBQVlHLE1BQU1FLFFBQVUsZUFDNUJOLEVBQWFJLE1BQU1DLE9BQVMsb0JBQzVCSCxFQUFnQkUsTUFBTUUsUUFBVSxVQUloQ1QsRUFBU08sTUFBTUMsT0FBUyxvQkFDeEJKLEVBQVlHLE1BQU1FLFFBQVUsZUFDNUJOLEVBQWFJLE1BQU1DLE9BQVMsc0JBQzVCSCxFQUFnQkUsTUFBTUUsUUFBVSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgdmFyIHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IG1haW4gPiBmb3JtID4gZGl2Om50aC1vZi10eXBlKDEpID4gbGFiZWwgPiBpbnB1dCcpLCB1c2VyUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gbWFpbiA+IGZvcm0gPiBkaXY6bnRoLW9mLXR5cGUoMikgPiBsYWJlbCA+IGlucHV0JyksIG1lc3NhZ2VOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSA+IGRpdiA+IG1haW4gPiBmb3JtID4gZGl2Om50aC1vZi10eXBlKDEpID4gc3BhbicpLCBtZXNzYWdlUGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5ID4gZGl2ID4gbWFpbiA+IGZvcm0gPiBkaXY6bnRoLW9mLXR5cGUoMikgPiBzcGFuJyk7XG5cbiAgICBpZih1c2VyTmFtZS52YWx1ZSAmJiB1c2VyUGFzc3dvcmQudmFsdWUpIHtcbiAgICAgICAgdXNlck5hbWUuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQg0L/QutGD0YPRglwiO1xuICAgICAgICBtZXNzYWdlTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHVzZXJQYXNzd29yZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBncmVlblwiO1xuICAgICAgICBtZXNzYWdlUGFzc3dvcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZih1c2VyTmFtZS52YWx1ZSkge1xuICAgICAgICB1c2VyTmFtZS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBncmVlblwiO1xuICAgICAgICBtZXNzYWdlTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIHVzZXJQYXNzd29yZC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjNzIxYzI0XCI7XG4gICAgICAgIG1lc3NhZ2VQYXNzd29yZC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmKHVzZXJQYXNzd29yZC52YWx1ZSkge1xuICAgICAgICB1c2VyTmFtZS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjNzIxYzI0XCI7XG4gICAgICAgIG1lc3NhZ2VOYW1lLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICB1c2VyUGFzc3dvcmQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgZ3JlZW5cIjtcbiAgICAgICAgbWVzc2FnZVBhc3N3b3JkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdXNlck5hbWUuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzcyMWMyNFwiO1xuICAgICAgICBtZXNzYWdlTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgICAgdXNlclBhc3N3b3JkLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM3MjFjMjRcIjtcbiAgICAgICAgbWVzc2FnZVBhc3N3b3JkLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSJdfQ==
