# s=[15,15,10,10,120,15,10,10,6,10,15,15,15,10,10,15,10]			######
# d=[2,2,0.5,0.5,1,1,1,2,2,1,1,2,2,0.5,0.5,1,1]			######
# cost=[5.20,2.94,3.50,1.20,1.25,13.516,8,10.6,102.5,15.5,15.067,7.74,19.9,3.775,10.380,14,16.176]	######
# q=['After Breakfast','After Breakfast','After Breakfast','After Breakfast','Before Breakfast','After Dinner','Before Breakfast','After Breakfast','After Breakfast','nt','After Breakfast','Before Breakfast','Before Breakfast','After Lunch','After Breakfast','After Breakfast','After Dinner']	######
# p=['After Dinner','After Dinner','nt','nt','nt','nt','nt','After Dinner','After Dinner','After Dinner','nt','Before Dinner','Before Dinner','nt','nt','nt','nt']	######

	
# tab=['CARDACE 2.5','CARCA 3.125','FRUSELAC   ','LANOXIAN 0.25mg',		'ELTROXIN 100mcg','STORVAS 20mg','T Lodoz 2.	5','Hifenac-D   ','Orpenem ER 300mg','Remetor CV 10mg','Embeta-TM 25mg','Geminor 	M1 ','Razo-D(dr.reddy LTD)','Tide plus 10mg','Torget Plus 10mg','Bylenta M50','Atocor Cv 10mg (Dr Reddy\'s LAB Ltd)']
		

# # name:
# # cost:
# # qtyperday:
# # dose:[p,q]
# # strip:



# print(len(s),len(d),len(cost),len(q),len(p),len(tab))



# for i in range(0,17):
 
#  arr=[tab[i],cost[i],d[i],[q[i],p[i]],s[i]]
#  print(arr)



b="""['CARDACE 2.5', 5.2, 2, ['After Breakfast', 'After Dinner'], 15]
['CARCA 3.125', 2.94, 2, ['After Breakfast', 'After Dinner'], 15]
['FRUSELAC   ', 3.5, 0.5, ['After Breakfast', 'nt'], 10]
['LANOXIAN 0.25mg', 1.2, 0.5, ['After Breakfast', 'nt'], 10]
['ELTROXIN 100mcg', 1.25, 1, ['Before Breakfast', 'nt'], 120]
['STORVAS 20mg', 13.516, 1, ['After Dinner', 'nt'], 15]
['T Lodoz 2.\t5', 8, 1, ['Before Breakfast', 'nt'], 10]
['Hifenac-D   ', 10.6, 2, ['After Breakfast', 'After Dinner'], 10]
['Orpenem ER 300mg', 102.5, 2, ['After Breakfast', 'After Dinner'], 6]
['Remetor CV 10mg', 15.5, 1, ['nt', 'After Dinner'], 10]
['Embeta-TM 25mg', 15.067, 1, ['After Breakfast', 'nt'], 15]
['Geminor \tM1 ', 7.74, 2, ['Before Breakfast', 'Before Dinner'], 15]
['Razo-D(dr.reddy LTD)', 19.9, 2, ['Before Breakfast', 'Before Dinner'], 15]
['Tide plus 10mg', 3.775, 0.5, ['After Lunch', 'nt'], 10]
['Torget Plus 10mg', 10.38, 0.5, ['After Breakfast', 'nt'], 10]
['Bylenta M50', 14, 1, ['After Breakfast', 'nt'], 15]
["Atocor Cv 10mg (Dr Reddy's LAB Ltd)", 16.176, 1, ['After Dinner', 'nt'], 10]"""


print(b.replace(']',''))