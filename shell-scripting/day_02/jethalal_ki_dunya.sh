# # This is jetha lal ki dunya

# << comment
# heloo
# comment

# name="jetha"
# echo "Name is $name and date is $(date)"

# echo "Enter the name"
# read username
# echo "You entered $username"

# echo "The Arguments are :$0 , $1 , $2"

#conditional 
#!/bin/bash

<< disclamier
This is just for infotainment purpose

disclamier

# read -p "Jetha ne mud ke kise dekha: " bandi

# if [[ "$bandi" == "daya" ]]; then
#     echo "loyal"
# else
#     echo "not loyal"
# fi


#loops

# for ((num=1 ; num<=5; num++));
# do   
#          echo "Hello world"
# done         


#while loo

# num=0

# while [[ $num -le 5 ]]
# do 
#     echo "hello"
#     ((num++))
# done
   



my_function() {
  echo "Hello, World!"
}

my_function



add() {
  local sum=$(($1 + $2))
  echo $sum
}
result=$(add 5 3)
echo "The sum is $result"



my_array=("value1" "value2" "value3")

echo ${my_array[1]}

