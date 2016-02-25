if @league.persisted?
  json.id @league.id
  json.ownerId @league.owner_id
  json.name @league.name

  json.specific_availabilites @league.specific_availabilities do |spc_a|

    json.id             spc_a.id
    json.positive       spc_a.positive
    json.notes          spc_a.notes
    json.date           spc_a.date
    json.startTime      spc_a.time_start
    json.endTime        spc_a.time_end

  end

  json.general_availabilities @league.general_availabilities do |gen_a|

    json.id             gen_a.id
    json.positive       gen_a.positive
    json.notes          gen_a.notes
    json.startDate      gen_a.first_date
    json.endDate        gen_a.last_date
    json.startTime      gen_a.time_start
    json.endTime        gen_a.time_end
    json.dayOfWeek      gen_a.day_of_week

  end

else
  nil
end
