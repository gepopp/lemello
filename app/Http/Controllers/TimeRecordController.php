<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Contact;
use App\Models\TimeRecord;
use Illuminate\Http\Request;
use App\Http\Requests\StoreTimeRecordRequest;
use App\Http\Requests\UpdateTimeRecordRequest;

class TimeRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('TimeRecord/TimeRecordIndex',
            [
                'count' => TimeRecord::count(),
                'sum'   => round(TimeRecord::sum('minutes') / 60, 2) . ' ' . __('Hours'),


            ]);
    }


    public function loadIndex(Request $request)
    {

        return TimeRecord::filter($request->only('customer_id'))
                         ->orderBy('created_at', 'DESC')
                         ->paginate(10)
                         ->withQueryString()
                         ->through(fn($record) => [
                             'id'             => $record->id,
                             'customer'       => $record->timetrackable->name,
                             'address'        => $record->timetrackable->address->line_1 . ', ' . $record->timetrackable->address->zip . ' ' . $record->timetrackable->address->city,
                             'duration'       => round($record->minutes / 60) . 'h ' . $record->minutes % 60 . 'min',
                             'duration_float' => round($record->minutes / 60, 2),
                             'rate'           => money(9543, 'EUR')->format(),
                             'rate_vat'       => money(9543 * .2, 'EUR')->format(),
                             'rate_btto'      => money(9543 * 1.2, 'EUR')->format(),
                             'netto'          => money(($record->minutes / 60) * 9543, 'EUR')->format(),
                             'vat'            => money((($record->minutes / 60) * 9543) * .2, 'EUR')->format(),
                             'brutto'         => money((($record->minutes / 60) * 9543) * 1.2, 'EUR')->format(),
                             'created'        => $record->created_at->format('d.m.Y h:i'),
                             'note'           => $record->note,
                         ]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(StoreTimeRecordRequest $request)
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreTimeRecordRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTimeRecordRequest $request)
    {
        TimeRecord::create($request->validated());

        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\TimeRecord $timeRecord
     * @return \Illuminate\Http\Response
     */
    public function show(TimeRecord $timeRecord)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\TimeRecord $timeRecord
     * @return \Illuminate\Http\Response
     */
    public function edit(TimeRecord $timeRecord)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateTimeRecordRequest $request
     * @param \App\Models\TimeRecord $timeRecord
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTimeRecordRequest $request, TimeRecord $timeRecord)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\TimeRecord $timeRecord
     * @return \Illuminate\Http\Response
     */
    public function destroy(TimeRecord $timeRecord)
    {
        //
    }
}
