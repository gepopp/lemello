<?php

namespace App\Http\Controllers;


use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Http\Request;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;




class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {

        return Inertia::render('Projects/ProjectsIndex', [
            'count' => Project::count(),
        ]);
    }




    public function loadIndex(Request $request)
    {

        return Project::filter($request->only('customer_id'))
                      ->paginate(10)
                      ->withQueryString()
                      ->through(fn($record) => [
                          'id'          => $record->id,
                          'name'        => $record->name,
                          'description' => $record->description,
                          'customer'    => [
                              'name'    => $record->contact->name,
                              'address' => (string)$record->contact->address,
                          ],
                          'created'     => $record->created_at->format('d.m.Y'),
                      ]);
    }


    public function search( Request $request){

        return Project::where('name', 'LIKE', '%' . $request->search . '%')->with('contact')->limit(5)->get();
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return Inertia::render('Projects/ProjectCreate');
    }




    /**
     * Store a newly created resource in storage.
     *
     * @param \App\Http\Requests\StoreProjectRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProjectRequest $request)
    {

        Project::create($request->validated());

        return redirect()->route('project.index');
    }




    /**
     * Display the specified resource.
     *
     * @param \App\Models\Project $project
     * @return \Inertia\Response
     */
    public function show(Project $project)
    {
        return Inertia::render('Projects/ProjectShow', compact('project'));
    }




    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Project $project
     * @return \Inertia\Response
     */
    public function edit(Project $project)
    {
        return Inertia::render('Projects/ProjectEdit', compact('project'));
    }




    /**
     * Update the specified resource in storage.
     *
     * @param \App\Http\Requests\UpdateProjectRequest $request
     * @param \App\Models\Project $project
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $project->update( $request->validated());

        return redirect()->route('project.index');
    }




    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Project $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
    }
}
