# Thermodynamic calculations for water 
# Hva gjør vi om input verdien er høyere eller lavere enn høyest og lavest temperatur i tabellen?



import pandas as pd
import numpy as np 

# Read the excel saturated water table
dataframe = pd.read_excel(r"C:\Users\nosobak\Documents\Sommerjobb\WP2\Saturated_water_table.xlsx")

def Thermodynamic_calculations_for_water(T_input, Q):
    """
    This function returns a tuple of the enthalpy, volume and mass flow for water based on a thermodynamic 
    table for saturated water and the input values for temperature T_input [*C] and heat Q.
    """
     
    # Searching in the table for the desired temperature 
    if T_input in dataframe['Temperature'].values:
        
        # Retrieves the row with the desired temperature value 
        temperature_row = dataframe[dataframe['Temperature'] == T_input]

        enthalpy = temperature_row['Enthalpy'].values[0] # kJ/kg
        
        spesific_volume = temperature_row['Spesific volume'].values[0] # m^3/kg
        mass_flow = Q / spesific_volume  # kg/h

        return enthalpy, spesific_volume, mass_flow
        
            

    else: # Hva gjør vi om input verdien er høyere eller lavere enn høyest og lavest temperatur i tabellen?
        # Since the input temperatur is not in the table, we need to interpolate
        # Retrieving the table values 
        temperature_table_values = dataframe['Temperature'].values
        spesific_volume_table_values = dataframe['Spesific volume'].values
        enthalpy_table_values = dataframe['Enthalpy'].values

        # Finding the indexes of the nearest temperature values 
        difference = temperature_table_values - T_input
        index_1 = np.where(difference < 0)[0][-1]
        index_2 = np.where(difference > 0)[0][0]

        # Retrieving the nearest two temperature, volume and enthalpy values
        T_1 = temperature_table_values[index_1]
        T_2 = temperature_table_values[index_2]
        V_1 = spesific_volume_table_values[index_1]
        V_2 = spesific_volume_table_values[index_2]
        e_1 = enthalpy_table_values[index_1]
        e_2 = enthalpy_table_values[index_2]

        # Interpolates linearly to estimate the volume and enthalpy for the given input temperature 
        enthalpy_estimated = e_1 + ((T_input - T_1)*(e_2 - e_1))/(T_2 - T_1)
        spesific_volume_estimated = V_1 + ((T_input - T_1)*(V_2 - V_1))/(T_2 - T_1)

        # Calculating the mass flow based on the estimated valume
        mass_flow = Q / spesific_volume_estimated
        
        return enthalpy_estimated, spesific_volume_estimated, mass_flow



a = 0

a = Thermodynamic_calculations_for_water(14, 12)
print(a)


"""
# Read the excel saturated water table


# The temperature we will search for in the excel table. This is an input value
T_input = 14 

# Antar en Q for å få resten av programmet til å fungere. This is an input value
Q = 12 # m^3/h

# Searching in the table for the desired temperature 
if T_input in dataframe['Temperature'].values:
    
    # Retrieves the row with the desired temperature value 
    temperature_row = dataframe[dataframe['Temperature'] == T_input]

    enthalpy = temperature_row['Enthalpy'].values[0] # kJ/kg
    
    volume = temperature_row['Volume'].values[0] # m^3/kg
    mass_flow = Q / volume  # kg/h

    #print(f'volumet = {volume}')
    #print(f'enthalpy = {enthalpy}')
    #print(f'm = {mass_flow}')
    
        

else: # Hva gjør vi om input verdien er høyere eller lavere enn høyest og lavest temperatur i tabellen?
    # Since the input temperatur is not in the table, we need to interpolate
    # Retrieving the table values 
    temperature_table_values = dataframe['Temperature'].values
    volume_table_values = dataframe['Volume'].values
    enthalpy_table_values = dataframe['Enthalpy'].values

    # Finding the indexes of the nearest temperature values 
    difference = temperature_table_values - T_input
    index_1 = np.where(difference < 0)[0][-1]
    index_2 = np.where(difference > 0)[0][0]

    # Retrieving the nearest two temperature, volume and enthalpy values
    T_1 = temperature_table_values[index_1]
    T_2 = temperature_table_values[index_2]
    V_1 = volume_table_values[index_1]
    V_2 = volume_table_values[index_2]
    e_1 = enthalpy_table_values[index_1]
    e_2 = enthalpy_table_values[index_2]

    # Interpolates linearly to estimate the volume and enthalpy for the given input temperature 
    enthalpy_estimated = e_1 + ((T_input - T_1)*(e_2 - e_1))/(T_2 - T_1)
    volume_estimated = V_1 + ((T_input - T_1)*(V_2 - V_1))/(T_2 - T_1)

    # Calculating the mass flow based on the estimated valume
    mass_flow = Q / volume_estimated
    
    #print(f'i1 = {index_1}')
    #print(f'i2 = {index_2}')
    #print(f'volumet = {volume_estimated}')
    #print(f'enthalpy = {enthalpy_estimated}')
    #print(f'm = {mass_flow}')

    #print(f'T1 = {T_1}')
    #print(f'T2 = {T_2}')
    #print(f'V1 = {V_1}')
    #print(f'V2 = {V_2}')
    #print(f'e1 = {e_1}')
    #print(f'e2 = {e_2}')
"""


