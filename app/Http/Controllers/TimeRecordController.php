<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
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
                         ->orderBy('started_at', 'DESC')
                         ->paginate(10)
                         ->withQueryString()
                         ->through(fn($record) => [
                             'id'             => $record->id,
                             'timetrackable'  => $record->timetrackable,
                             'duration'       => (($record->minutes - ($record->minutes % 60)) / 60) . 'h ' . $record->minutes % 60 . 'min',
                             'duration_float' => round($record->minutes / 60, 2),
                             'rate'           => money(9543, 'EUR')->format(),
                             'rate_vat'       => money(9543 * .2, 'EUR')->format(),
                             'rate_btto'      => money(9543 * 1.2, 'EUR')->format(),
                             'netto'          => money(($record->minutes / 60) * 9543, 'EUR')->format(),
                             'vat'            => money((($record->minutes / 60) * 9543) * .2, 'EUR')->format(),
                             'brutto'         => money((($record->minutes / 60) * 9543) * 1.2, 'EUR')->format(),
                             'created'        => $record->created_at->format('d.m.Y H:i'),
                             'started'        => $record->started_at ? $record->started_at->format('d.m. H:i') : '--',
                             'ended'          => $record->started_at ? $record->ended_at->format('H:i') : '',
                             'note'           => $record->note,
                         ]);
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
    public function show(TimeRecord $timetrack)
    {

        return Inertia::render('TimeRecord/TimeRecordShow', compact('timetrack'));
    }




    public function timetrackable(TimeRecord $timetrack)
    {

        return $timetrack->timetrackable;
    }




    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\TimeRecord $timeRecord
     * @return \Inertia\Response
     */
    public function edit(TimeRecord $timetrack)
    {
        $timetrack = $timetrack->load('timetrackable');

        return Inertia::render('TimeRecord/TimeRecordEdit', compact('timetrack'));
    }




    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateTimeRecordRequest $request
     * @param \App\Models\TimeRecord $timeRecord
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTimeRecordRequest $request, TimeRecord $timetrack)
    {

        $timetrack->update($request->validated());

        return redirect()->route('timetrack.index');
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\TimeRecord $timeRecord
     * @return \Illuminate\Http\Response
     */
    public function destroy(TimeRecord $timetrack)
    {

        $timetrack->delete();

        return redirect()->route('timetrack.index');
    }
}
