
import math


def milliTimeto_second( time ):#attends un temps en millisecondes
    return time/1000


def rawDuration_toSeconds(duration):
    print(duration)
    return [ milliTimeto_second(e) for e in duration ]



def rawDurations_toSeconds(durations):
    return [ rawDuration_toSeconds(e ) for e  in durations ] 


def getSecondIntervalFromTimesMilli(interval_times_sort_mili) : 
    second_interval_times =[]
    for i in range(len(interval_times_sort_mili )) :
        second_interval_times.append( rawDurations_toSeconds(interval_times_sort_mili[i]))
    return second_interval_times


def secondTimeto_secminhours( time ):#attends un temps en  secondes

        seconds ,minutes= math.modf(time/60)
        heures = 0
        print(seconds, minutes)
        if minutes > 60  :
                minutes , heures= math.modf(minutes/60)
                minutes = round(minutes * 60 ,2 )
        else :
            seconds = round(seconds *0.6 ,2 )
        return [heures,minutes,seconds]

def milliTimeto_secminhours( time ):
    return secondTimeto_secminhours( milliTimeto_second( time) )
     
def milliTimeto_min( time ):
    return milliTimeto_second( time)/60

def secmin_to_str( times ):
    str_res = ""
    i=0
    print(times)
    for  time in times:
        if i == (len(times)-1):
            print("time " + str(time))
            stre = (str(time).split("."))[1][:2]
        else:
            stre = (str(time).split("."))[0] 
        print("stre " + stre)
        if( len(stre) <2 ):
            stre = stre+"0" if i == (len(times) -1 )else "0"+stre

        str_res += ":" + stre 
        i+=1
    str_time = ["hours","minutes","seconds"]
    tail = ""
    for k in range(i,len(str_time)):
            tail  += "00:"
    
    return tail+str_res[1:]
            

def secondTimeto_str( time ):
    return secmin_to_str( secondTimeto_secminhours( time ) )
def milliTimeto_str( time ):
    return secmin_to_str( milliTimeto_secminhours( time ) )